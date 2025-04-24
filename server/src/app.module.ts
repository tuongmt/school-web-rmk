import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { SlideModule } from './slide/slide.module';
import { PostModule } from './post/post.module';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';
import { MinioProvider } from './minio/minio.provider';
import { LanguageModule } from './language/language.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './auth/user/user.module';
import { AdminModule } from './auth/admin/admin.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { FormModule } from './form/form.module';
import { AppService } from './app.service';
import { ConsultationModule } from './consultation/consultation.module';
import { RegistrationModule } from './registration/registration.module';
import { DashboardModule } from './dashbroad/dashboard.module';
import { RecruitmentProfileModule } from './recruitment-profile/recruitment-profile.module';
import { FaqModule } from './faq/faq.module';
import { DocumentModule } from './document/document.module';
import { MajorModule } from './major/major.module';
import { ContactModule } from './contact/contact.module';
import { EventModule } from './event/event.module';
import { SubscribeModule } from './subscriber/subscriber.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { AuditlogModule } from './auditlog/auditlog.module';
import { MediaLibModule } from './media-lib/media-lib.module';
import { RoleModule } from './auth/role/role.module';
import { PermissionModule } from './auth/permission/permission.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    MulterModule.register({
      storage: multer.memoryStorage(),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@example.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    AuthModule,
    SlideModule,
    PostModule,
    LanguageModule,
    CategoryModule,
    DashboardModule,
    UserModule,
    AdminModule,
    FormModule,
    SlideModule,
    ConsultationModule,
    RegistrationModule,
    RecruitmentProfileModule,
    FaqModule,
    DocumentModule,
    MajorModule,
    ContactModule,
    EventModule,
    SubscribeModule,
    AuditlogModule,
    MediaLibModule,
    RoleModule,
    PermissionModule,
  ],
  controllers: [AppController],
  providers: [AppService, MinioProvider],
  exports: [MinioProvider],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
