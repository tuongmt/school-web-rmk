import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { PrismaService } from '../prisma/prisma.service';
import { getPaginatedData } from '../Util/pagination.service';

@Injectable()
export class FaqService {
  constructor(private readonly prisma: PrismaService) {}

  // Tạo FAQ mới
  async createFAQ(
    createFaqDto: CreateFaqDto,
    fileBaseUrl: string,
    userId: string,
  ) {
    try {
      const faq = await this.prisma.faq.create({
        data: {
          summary: createFaqDto.summary,
          file: fileBaseUrl,
          description: createFaqDto.description,
          problem: createFaqDto.problem,
          userId: userId,
        },
      });
      return { success: true, data: faq };
    } catch (error) {
      console.error('Error creating FAQ:', error);
      throw new BadRequestException(error.message);
    }
  }

  // Danh sách FAQ
  async findAllFAQ(query: any) {
    const includeOptions = {
      id: true,
      summary: true,
      description: true,
      problem: true,
      file: true,
      answer: true,
      createdAt: true,
      updatedAt: true,
    };
    return await getPaginatedData(this.prisma, query, 'faq', includeOptions);
  }

  // Lấy chi tiết FAQ id
  async getFaqById(id: string) {
    try {
      const faq = await this.prisma.faq.findUnique({
        where: { id },
      });

      if (!faq) {
        throw new BadRequestException(
          'The FAQ you are looking for does not exist!',
        );
      }

      return faq;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  // Sửa FAQ
  async updateFAQ(id: string, updateFaqDto: UpdateFaqDto) {
    const findFAQ = await this.prisma.faq.findUnique({
      where: { id: id },
    });
    // Kiểm tra xem FAQ có tồn tại không
    if (!findFAQ) {
      throw new Error('The FAQ does not exist');
    }
    const updatedFAQ = await this.prisma.faq.update({
      where: { id: id },
      data: {
        answer: updateFaqDto.answer,
        status: updateFaqDto.status,
      },
    });
    return updatedFAQ;
  }

  // Xóa FAQ theo ID
  async removeFAQ(id: string) {
    const faq = await this.prisma.faq.findUnique({
      where: { id: id },
    });
    if (!faq) {
      throw new BadRequestException(`The FAQ with ID ${id} does not exist!`);
    }
    await this.prisma.faq.delete({ where: { id: id } });
    return { message: 'Successfully deleted!' };
  }
}
