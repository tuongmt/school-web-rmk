import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateFormDto {
  @ApiProperty({ description: 'The title of the form' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'The content of the form' })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ description: 'The type of the form' })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({ description: 'The status of the form' })
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

}
