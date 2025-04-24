import { Injectable } from '@nestjs/common';
import * as speakeasy from 'speakeasy';
import { ConfigService } from '@nestjs/config';
import { Client } from '@microsoft/microsoft-graph-client';
import { DeviceCodeCredential } from '@azure/identity';

@Injectable()
export class OtpServiceMicrosoft {
  private otpStore = new Map<string, string>(); // Sử dụng Map để lưu trữ mã OTP cho từng email
  private graphClient: Client;

  constructor(private configService: ConfigService) {
    const tenantId = configService.get<string>('AZURE_TENANT_ID');
    const clientId = configService.get<string>('AZURE_CLIENT_ID');
    const clientSecret = configService.get<string>('AZURE_CLIENT_SECRET');

    // Sử dụng ClientSecretCredential để lấy token
    const credential = new DeviceCodeCredential({
      tenantId,
      clientId,
    });

    this.graphClient = Client.initWithMiddleware({
      authProvider: {
        getAccessToken: async () => {
          const tokenResponse = await credential.getToken(['Mail.Send']);
          return tokenResponse.token;
        },
      },
    });
  }

  generateOtp(email: string): string {
    const otp = speakeasy.totp({
      secret: this.configService.get<string>('OTP_SECRET'),
      encoding: 'base32',
    });
    this.otpStore.set(email, otp);
    return otp;
  }

  async sendOtpMicrosoft(email: string): Promise<void> {
    const otp = this.generateOtp(email);
    const message = {
      subject: 'Your OTP Code',
      body: {
        contentType: 'Text',
        content: `Your OTP code is ${otp}`,
      },
      toRecipients: [
        {
          emailAddress: {
            address: email,
          },
        },
      ],
    };

    // Gửi email tới người dùng
    await this.graphClient.api(`/users/${email}/sendMail`).post({ message });
  }

  verifyOtpMicrosoft(email: string, otp: string): boolean {
    const storedOtp = this.otpStore.get(email);
    if (storedOtp === otp) {
      this.otpStore.delete(email);
      return true;
    }
    return false;
  }
}
