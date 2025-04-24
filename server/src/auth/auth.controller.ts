import {
  Controller,
  Get,
  Req,
  UseGuards,
  Post,
  Body,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EmailService } from './sendemail.service';
import { UserService } from './user/user.service';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { SetPasswordDto } from './dto/set-password.dto';
import { JwtService } from '@nestjs/jwt';

import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  private readonly token: string;

  constructor(
    private readonly otpService: EmailService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // Route để xác minh OTP
  @ApiOperation({ summary: 'Microsoft Authentication' })
  @ApiResponse({
    status: 302,
    description: 'Redirected to Microsoft for authentication',
  })
  @Get('microsoft')
  @UseGuards(AuthGuard('microsoft'))
  async microsoftLogin() {
    // Initiates the Microsoft OAuth2 login flow
  }

  @ApiOperation({ summary: 'Microsoft Authentication Callback' })
  @ApiResponse({
    status: 200,
    description:
      'OTP sent to user email after successful Microsoft authentication',
  })
  @Get('microsoft/callback')
  @UseGuards(AuthGuard('microsoft'))
  async microsoftLoginCallback(
    @Req() req,
    @Res({ passthrough: true }) res: Response,
  ) {
    if (!req.user) {
      return { message: 'Not Found' };
    }

    // Gửi mã OTP đến email của người
    await this.otpService.sendOtp(req.user.email);

    // Tạo JWT token và lưu vào cookie
    const payload = {
      email: req.user.email,
      name: req.user.name,
      jobTitle: req.user.jobTitle,
      twoFactorEnabled: false,
    };
    const jwtToken = this.jwtService.sign(payload);
    res.cookie('jwt', jwtToken, {
      expires: new Date(
        Date.now() +
          Number(process.env.COOKIE_EXPIRES_TIME) * 24 * 60 * 60 * 1000,
      ),
    });

    const token = req.cookies['jwt'];
    console.log('token', token);
    const user = await this.jwtService.verifyAsync(token);
    console.log(user);
    return { message: 'OTP đã được gửi đến email của bạn', jwtToken };
  }

  // microsoft otp
  @ApiOperation({ summary: 'Verify OTP for Microsoft login' })
  @ApiBody({
    description: 'OTP and token for verification',
    schema: {
      example: { otp: '123456', token: 'jwtToken' },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'OTP verified and access token returned',
  })
  @Post('verify-otp')
  async verifyOtp(
    @Body('otp') otp: string,
    @Body('token') tokenmc: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    // Lấy JWT từ cookie

    if (!tokenmc) {
      return { message: 'Token not found in cookies' };
    }

    const decodedToken = this.jwtService.verify(tokenmc);
    const result = await this.otpService.verifyOtp(decodedToken.email, otp);

    console.log(result);
    if (result.message === 'OTP is valid') {
      const createdUser =
        await this.otpService.createUserIfNotExists(decodedToken);
      console.log(createdUser);
      const { result: accessToken } = await this.userService.tokenMicrosoft(
        decodedToken.email,
      );
      res.cookie('jwt', accessToken, {
        expires: new Date(
          Date.now() +
            Number(process.env.COOKIE_EXPIRES_TIME) * 24 * 60 * 60 * 1000,
        ),
      });
      return {
        message: 'OTP is valid',
        token: accessToken, // Trả về accessToken sau khi xác minh thành công
        //user: createdUser, // Trả về thông tin người dùng sau khi tạo
      };
    }

    return result; // Trả về kết quả xác minh OTP (nếu không hợp lệ)
  }

  //credentials login
  @ApiOperation({ summary: 'Set Password' })
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiBody({
    description: 'Data for setting a new password',
    type: SetPasswordDto,
  })
  @ApiResponse({ status: 200, description: 'Password set successfully' })
  @Post('set-password')
  async setPassword(@Body() setPasswordDto: SetPasswordDto) {
    return this.userService.setPassword(setPasswordDto);
  }

  @ApiOperation({ summary: 'Login with credentials' })
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiBody({ description: 'Data for login', type: LoginDto })
  @ApiResponse({
    status: 200,
    description: 'OTP sent to user email after login',
  })
  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiResponse({ status: 200, description: 'Login successful.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiBody({ description: 'Login credentials', type: LoginDto })
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.userService.login(loginDto, res);
  }

  @Post('enable-2fa')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Enable two-factor authentication' })
  @ApiResponse({ status: 200, description: '2FA enabled.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async enableTwoFactorAuthentication(@Req() req) {
    const token = req.cookies['jwt'];
    const user = await this.jwtService.verifyAsync(token);
    console.log(user);

    const { twoFactorSecret, qrCodeDataURL } =
      await this.userService.generateTwoFactorSecret(user);
    return { twoFactorSecret, qrCodeDataURL };
  }

  @Post('verify-2fa')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Verify two-factor authentication' })
  @ApiResponse({ status: 200, description: '2FA verified.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: 'Two-factor authentication code',
        },
      },
    },
  })
  async verifyTwoFactor(@Req() req, @Body('code') code: string) {
    //verify token with jwt
    const token = req.cookies['jwt'];
    const decodedUser = await this.jwtService.decode(token);
    const user = await this.userService.findByEmail(decodedUser.email);

    const isValid = await this.userService.verifyTwoFactorCode(user, code);

    if (isValid) {
      const updatedUser = await this.userService.updateUser(user.id, {
        twoFactorEnabled: true,
      });
      if (updatedUser) {
        return { success: Boolean(updatedUser), message: '2FA enabled' };
      }
    } else {
      throw new UnauthorizedException('Invalid authentication code');
    }
  }

  //disable 2fa
  @Post('disable-2fa')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Disable two-factor authentication' })
  @ApiResponse({ status: 200, description: '2FA disabled.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        password: {
          type: 'string',
          description: 'Password',
        },
      },
    },
  })
  async disableTwoFactorAuthentication(
    @Req() req,
    @Body('password') password: string,
  ) {
    const token = req.cookies['jwt'];
    const user = await this.jwtService.verifyAsync(token);

    // Verify the password
    const isPasswordValid = await this.userService.validatePassword(
      user.email,
      password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const updatedUser = await this.userService.updateUser(user.id, {
      twoFactorEnabled: false,
      twoFactorSecret: '',
    });
    if (updatedUser) {
      return { success: Boolean(updatedUser), message: '2FA disabled' };
    }
  }

  //verify otp credentials
  @ApiOperation({ summary: 'Verify OTP for Credentials login' })
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiBody({
    description: 'Email and OTP for credentials verification',
    schema: { example: { email: 'user@example.com', otp: '123456' } },
  })
  @ApiResponse({ status: 200, description: 'Login successful with valid OTP' })
  @Post('verify-otp-Credentials')
  async verifyOtpCredentials(
    @Body('email') email: string,
    @Body('otp') otp: string,
  ) {
    if (!email) {
      return { message: 'Not Found Email' };
    }
    // Gọi hàm xác minh OTP từ OtpService
    const result = await this.otpService.verifyOtp(email, otp);
    // xác thực đăng nhập

    // xác thực OTP
    if (result.message === 'OTP is valid') {
      return {
        message: 'Login successful',
        success: Boolean(this.token),
        result: this.token ?? 'Không tạo được token!!!',
      };
    }
    return result; // Trả về kết quả xác minh OTP (nếu không hợp lệ)
  }

  // đăng xuất
  @ApiOperation({ summary: 'Logout' })
  @ApiResponse({ status: 200, description: 'Logout successful' })
  @Get('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt');
    return { message: 'Logout successful' };
  }
  // quên mật khẩu
  @ApiOperation({ summary: 'Forgot Password' })
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          description: 'Email',
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Password reset initiated' })
  @Post('forgot-password')
  async forgotPassword(@Body('email') email: string) {
    return this.userService.forgotPassword(email);
  }
}
