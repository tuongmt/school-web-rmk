import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { getPaginatedData } from '../Util/pagination.service';
import { MinioProvider } from '../minio/minio.provider';

@Injectable()
export class PostService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly minioProvider: MinioProvider,
  ) {}

  private getCurrentUser(req: Request) {
    return req['userId'];
  }

  private readonly postSelection = {
    id: true,
    title: true,
    image: true,
    content: true,
    createdAt: true,
    updatedAt: true,
    category: { select: { name: true } },
    language: { select: { name: true } },
    slides: {
      select: { title: true, image: true, altName: true, isActive: true },
    },
  };

  async createPost(
    req: Request,
    createPostDto: CreatePostDto,
    image?: Express.Multer.File,
  ) {
    try {
      const userId = this.getCurrentUser(req);
      const imageUrl = image
        ? await this.minioProvider.uploadFile(image)
        : null;
      const post = await this.prisma.post.create({
        data: {
          title: createPostDto.title,
          content: createPostDto.content,
          author: userId,
          image: imageUrl,
          languageId: createPostDto.languageId,
          categoryId: createPostDto.categoryId,
          isActive: true,
        },
        include: {
          language: { select: { name: true } },
          category: { select: { name: true } },
        },
      });
      return {
        success: Boolean(post),
        data: post ?? 'Không tạo được bài viết',
      };
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while creating the post');
    }
  }

  async findAll(query: any) {
    return await getPaginatedData(
      this.prisma,
      query,
      'post',
      this.postSelection,
    );
  }

  async findOne(id: string) {
    try {
      const post = await this.prisma.post.findUnique({
        where: { id },
        select: this.postSelection,
      });
      return {
        success: Boolean(post),
        data: post ?? 'Không tìm thấy bài viết',
      };
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while fetching the post');
    }
  }

  async update(
    id: string,
    updatePostDto: UpdatePostDto,
    image?: Express.Multer.File,
  ) {
    try {
      const imageUrl = image
        ? await this.minioProvider.uploadFile(image)
        : null;
      const post = await this.prisma.post.update({
        where: { id },
        data: {
          ...updatePostDto,
          ...(imageUrl && { image: imageUrl }),
        },
        select: this.postSelection,
      });
      return {
        success: Boolean(post),
        data: post ?? 'Không tìm thấy bài viết',
      };
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while updating the post');
    }
  }

  async remove(id: string) {
    try {
      const post = await this.prisma.post.delete({
        where: { id },
      });

      if (post.image) {
        const fileName = post.image.split('/').pop();
        const deleteImage = await this.minioProvider.deleteFile(fileName);
        return {
          success: Boolean(post && deleteImage),
          data: post ? { post, deleteImage } : 'Không tìm thấy bài viết',
        };
      }

      return {
        success: Boolean(post),
        data: post ? { post } : 'Không tìm thấy bài viết',
      };
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while deleting the post');
    }
  }
}
