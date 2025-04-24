import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as speakeasy from 'speakeasy';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class OtpService {
  private readonly transporter;
  private readonly otpStore = new Map<string, string>();
  private readonly otpExpiry: Map<string, Date> = new Map();

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const email = configService.get<string>('GMAIL_USER');
    const password = configService.get<string>('GMAIL_PASS');

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      },
    });
  }

  // Hàm gửi OTP
  async sendOtp(email: string) {
    const secret = speakeasy.generateSecret({ length: 20 });
    const token = speakeasy.totp({
      secret: secret.base32,
      encoding: 'base32',
      step: 300, // thời gian của mã OTP
    });
    // Lưu mã OTP vào otpStore
    this.otpStore.set(email, token);
    this.otpExpiry.set(email, new Date(Date.now() + 300000));

    const mailOptions = {
      from: this.configService.get<string>('GMAIL_USER'),
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is: ${token}`,
    };
    await this.transporter.sendMail(mailOptions);
    return { message: 'OTP sent to your email' };
  }

  // Hàm xác minh OTP
  async verifyOtp(email: string, otp: string) {
    const storedOtp = this.otpStore.get(email);
    const expiryTime = this.otpExpiry.get(email);

    if (expiryTime && new Date() > expiryTime) {
      return { message: 'Expire OTP' };
    }
    if (!storedOtp) {
      return { message: 'No OTP found for this email' };
    }

    if (storedOtp === otp) {
      this.otpStore.delete(email);
      return { message: 'OTP is valid' };
    } else {
      return { message: 'Invalid OTP' };
    }
  }

  // Hàm để kiểm tra và tạo người dùng mới cùng với profile
  async createUserIfNotExists(user: any) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    if (!existingUser) {
      // Tạo người dùng mới và profile
      const newUser = await this.prisma.user.create({
        data: {
          email: user.email,
          isActive: true,
          profile: {
            create: {
              name: user.name || 'name',
              jobTitle: user.jobTitle ?? '',
            },
          },
        },
      });
      return newUser;
    }
    console.log('existingUser', existingUser);
    return existingUser;
  }
}
