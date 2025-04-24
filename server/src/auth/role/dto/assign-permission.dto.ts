import { IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class AssignPermissionsDto {
  @ApiProperty({
    description: 'Permission IDs',
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  permissionIds: string[];
}
