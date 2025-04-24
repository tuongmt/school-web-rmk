import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import {
  IsEmail,
  IsNotEmpty,
  Length,
  Matches,
  IsOptional,
  IsInt,
  IsEnum,
} from 'class-validator';
import { Gender } from '@prisma/client';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsOptional()
  @IsNotEmpty({ message: 'Tên không được để trống' })
  @Matches(/^[\p{L}\s]+$/u, {
    message: 'Tên không được chứa ký tự đặc biệt',
  })
  name?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Email không được để trống' })
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  email?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Số điện thoại không được để trống' })
  @Length(10, 10, { message: 'Số điện thoại phải có đúng 10 ký tự' })
  @Matches(/^(03|05|07|08|09)[0-9]{8}$/, {
    message:
      'Số điện thoại phải bắt đầu bằng các mã vùng hợp lệ của Việt Nam (03, 05, 07, 08, 09) và chứa 10 chữ số',
  })
  phoneNumber?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'CCCD không được để trống' })
  CCCD?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Giới tính không được để trống' })
  @IsEnum(Gender, {
    message: 'Giới tính phải là một trong các giá trị: MALE, FEMALE, OTHER',
  })
  gender?: Gender;

  @IsOptional()
  @IsNotEmpty({ message: 'Năm tốt nghiệp không được để trống' })
  @IsInt({ message: 'Năm tốt nghiệp phải là một số nguyên' })
  graduationYear?: number;

  @IsOptional()
  @IsNotEmpty({ message: 'Tỉnh tốt nghiệp không được để trống' })
  highSchoolProvince?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Tên trường không được để trống' })
  highSchoolName?: string;
}
