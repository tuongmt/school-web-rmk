// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Param,
//   Delete,
//   Put,
// } from '@nestjs/common';
// import { StudentService } from './student.service';
// import { CreateStudentDto } from './dto/create-student.dto';
// import { UpdateStudentDto } from './dto/update-student.dto';
// import { Student } from '@prisma/client';

// @Controller('student')
// export class StudentController {
//   constructor(private readonly studentService: StudentService) {}

//   // Tạo mới học sinh
//   @Post('create-student')
//   async createStudent(@Body() data: CreateStudentDto): Promise<Student> {
//     return this.studentService.createStudent(data);
//   }

//   // Lấy chi tiết học sinh
//   @Get(':id')
//   getStudentById(@Param('id') id: string): Promise<Student> {
//     return this.studentService.getStudentById(id);
//   }

//   // Cập nhật thông tin học sinh
//   @Put('update/:id')
//   async updateDocument(
//     @Param('id') id: string,
//     @Body() data: UpdateStudentDto,
//   ) {
//     return this.studentService.updateStudent(id, data);
//   }

//   // Xóa học sinh
//   @Delete('delete/:id')
//   deleteStudent(@Param('id') id: string): Promise<Student> {
//     return this.studentService.deleteStudent(id);
//   }
// }
