import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RecruitmentProfileService } from './recruitment-profile.service';
import { CreateRecruitmentProfileDto } from './dto/create-recruitment-profile.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MinioProvider } from '../minio/minio.provider';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Permissions } from '../auth/decorators/permissions.decorator';

@ApiTags('Recruitment')
@Controller('recruitment-profile')
export class RecruitmentProfileController {
  constructor(
    private readonly recruitmentProfileService: RecruitmentProfileService,
    private readonly minioProvider: MinioProvider,
  ) {}
  @ApiOperation({ summary: 'Create a new recruitment profile' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description:
      'The data for creating a recruitment profile, including an image',
    type: CreateRecruitmentProfileDto,
  })
  @ApiResponse({
    status: 201,
    description: 'recruitment profile created successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  @UseInterceptors(FileInterceptor('cv')) //trường nhận vào
  async create(
    @Body() createRecruitmentProfileDto: CreateRecruitmentProfileDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    const uploadCV = await this.minioProvider.uploadFile(image);

    return this.recruitmentProfileService.create(
      createRecruitmentProfileDto,
      uploadCV,
    );
  }

  @ApiOperation({ summary: 'Get all recruitment profile' })
  @ApiResponse({
    status: 200,
    description: 'Recruitment profile fetched successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Permissions('view-recruitment')
  findAll(@Query() query: any) {
    return this.recruitmentProfileService.findAll(query);
  }

  @ApiOperation({ summary: 'Get a recruitment profile by ID' })
  @ApiResponse({
    status: 200,
    description: 'recruitment profile fetched successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Permissions('view-recruitment')
  findOne(@Param('id') id: string) {
    return this.recruitmentProfileService.findOne(id);
  }

  @ApiOperation({ summary: 'Delete a recruitment profile by ID' })
  @ApiResponse({
    status: 200,
    description: 'recruitment profile fetched successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Permissions('delete-recruitment')
  remove(@Param('id') id: string) {
    return this.recruitmentProfileService.remove(id);
  }
}
