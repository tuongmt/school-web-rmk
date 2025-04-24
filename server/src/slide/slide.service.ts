import { getPaginatedData } from '../Util/pagination.service';
import { Injectable } from '@nestjs/common';
import { CreateSlideDto } from './dto/create-slide.dto';
import { UpdateSlideDto } from './dto/update-slide.dto';
import { PrismaService } from '../prisma/prisma.service';
import { MinioProvider } from '../minio/minio.provider';

@Injectable()
export class SlideService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly minioProvider: MinioProvider,
  ) {}

  async create(createSlideDto: CreateSlideDto, image: Express.Multer.File) {
    const imageUrl = await this.minioProvider.uploadFile(image);
    if (!imageUrl) {
      throw new Error('Failed to upload image');
    }
    return this.prisma.slide.create({
      data: {
        ...createSlideDto,
        image: imageUrl,
      },
      select: {
        id: true,
        title: true,
        image: true,
      },
    });
  }

  async findAll(query: any) {
    const includeOption = {
      id: true,
      title: true,
      image: true,
      createdAt: true,
      post: {
        select: {
          title: true,
          image: true,
        },
      },
    };
    return await getPaginatedData(this.prisma, query, 'slide', includeOption);
  }

  async findOne(id: string) {
    const slide = await this.prisma.slide.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        image: true,
        createdAt: true,
        post: {
          select: {
            id: true,
            title: true,
            image: true,
            content: true,
          },
        },
      },
    });
    return {
      success: Boolean(slide),
      data: slide ?? 'Không tìm thấy slide',
    };
  }

  async update(
    id: string,
    updateSlideDto: UpdateSlideDto,
    image?: Express.Multer.File,
  ) {
    const imageUrl = image
      ? await this.minioProvider.uploadFile(image)
      : undefined;
    const dataToUpdate = {
      ...updateSlideDto,
      ...(imageUrl && { image: imageUrl }),
    };

    return this.prisma.slide.update({
      where: { id },
      data: dataToUpdate,
    });
  }

  async remove(id: string) {
    const slide = await this.prisma.slide.delete({
      where: { id },
    });
    if (slide.image) {
      const fileName = slide.image.split('/').pop();
      const deleteImage = await this.minioProvider.deleteFile(fileName);
      return {
        success: Boolean(slide && deleteImage),
        data: slide ? { slide, deleteImage } : 'Không tìm thấy slide',
      };
    }
    return {
      success: Boolean(slide),
      data: slide ? { slide } : 'Không tìm thấy slide',
    };
  }
}
