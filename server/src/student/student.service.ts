// import {
//   BadRequestException,
//   Injectable,
//   NotFoundException,
// } from '@nestjs/common';
// import { PrismaClient, Student } from '@prisma/client';
// import { CreateStudentDto } from './dto/create-student.dto';
// import { UpdateStudentDto } from './dto/update-student.dto';

// @Injectable()
// export class StudentService {
//   private prisma = new PrismaClient();

//   // Tạo student
//   async createStudent(data: CreateStudentDto): Promise<Student> {
//     // Kiểm tra xem email đã tồn tại chưa
//     const existingStudent = await this.prisma.student.findUnique({
//       where: { email: data.email },
//     });

//     if (existingStudent) {
//       throw new BadRequestException('Email đã tồn tại trong hệ thống');
//     }

//     return this.prisma.student.create({
//       data,
//     });
//   }

//   // Lấy thông tin học sinh theo Id
//   async getStudentById(id: string): Promise<Student> {
//     const student = await this.prisma.student.findUnique({ where: { id } });
//     if (!student) {
//       throw new NotFoundException('Học sinh này không tồn tại!');
//     }
//     return student;
//   }

//   //Sửa học sinh
//   async updateStudent(id: string, data: UpdateStudentDto): Promise<Student> {
//     const existingStudent = await this.prisma.student.findUnique({
//       where: { email: data.email },
//     });

//     if (existingStudent) {
//       throw new BadRequestException('Email đã tồn tại trong hệ thống');
//     }
//     return this.prisma.student.update({ where: { id }, data });
//   }

//   // Xóa học sinh
//   async deleteStudent(id: string): Promise<Student> {
//     return this.prisma.student.delete({
//       where: { id: id },
//     });
//   }
// }
