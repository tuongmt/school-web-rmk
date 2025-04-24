import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MinioProvider } from '../minio/minio.provider';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { Permissions } from '../auth/decorators/permissions.decorator';
import { RolesGuard } from '../auth/guard/roles.guard';

@Controller('post')
@ApiTags('Post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly minioProvider: MinioProvider,
  ) {}

  @ApiOperation({ summary: 'Create a new post' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'The data for creating a post, including an image',
    type: CreatePostDto,
  })
  @ApiResponse({ status: 201, description: 'Post created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Permissions('create-post')
  @UseInterceptors(FileInterceptor('image'))
  async createPost(
    @Req() req: Request,
    @Body() createPostDto: CreatePostDto,
    @UploadedFile() image?: Express.Multer.File,
  ) {
    // const uploadResult = image
    //   ? await this.minioProvider.uploadFile(image)
    //   : null;
    return this.postService.createPost(req, createPostDto, image);
  }

  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ status: 200, description: 'Posts fetched successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'Number of items per page',
  })
  @ApiQuery({
    name: 'sort',
    type: 'string',
    required: false,
    description: 'Field to sort by',
  })
  @ApiQuery({
    name: 'title',
    type: 'string',
    required: false,
    description: 'Filter conditions',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.postService.findAll(query);
  }

  @ApiOperation({ summary: 'Get a post by ID' })
  @ApiResponse({ status: 200, description: 'Post fetched successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a post by ID' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'The data for updating a post, including an image',
    type: UpdatePostDto,
  })
  @ApiResponse({ status: 200, description: 'Post updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Permissions('update-post')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    // const uploadResult = image
    //   ? await this.minioProvider.uploadFile(image)
    return this.postService.update(id, updatePostDto, image);
  }

  @ApiOperation({ summary: 'Delete a post by ID' })
  @ApiResponse({ status: 200, description: 'Post deleted successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Permissions('delete-post')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
