import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePostDto {
  @ApiPropertyOptional({ description: 'The title of the post' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ description: 'The content of the post' })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({ description: 'The category ID of the post' })
  @IsOptional()
  @IsString()
  categoryId?: string;

  @ApiPropertyOptional({ description: 'The language ID of the post' })
  @IsOptional()
  @IsString()
  languageId?: string;

  @ApiPropertyOptional({ description: 'The description of the post' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'The image file to upload',
    type: 'string',
    format: 'binary',
  })
  @IsOptional()
  image?: any;
}
