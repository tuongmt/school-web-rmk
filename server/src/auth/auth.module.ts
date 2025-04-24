import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { EmailService } from './sendemail.service';
import { MicrosoftStrategy } from './microsoft.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from './user/user.service';

export const jwtSecret = process.env.JWT_SECRET;

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'microsoft' }),
  ],
  controllers: [AuthController],
  providers: [EmailService, MicrosoftStrategy, JwtStrategy, UserService],
})
export class AuthModule {}
