import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService, PrismaClient],
})
export class DashboardModule {}
