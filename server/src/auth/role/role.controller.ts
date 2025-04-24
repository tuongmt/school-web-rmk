import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { Permissions } from '../decorators/permissions.decorator';
import {
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiConsumes,
} from '@nestjs/swagger';
import { AssignPermissionsDto } from './dto/assign-permission.dto';

@Controller('roles')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @Permissions('create-role')
  async create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  @Permissions('view-role')
  async findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  @Permissions('view-role')
  async findOne(@Param('id') id: string) {
    const role = await this.roleService.findOne(id);
    if (!role) {
      throw new NotFoundException(`Role with ID ${id} not found`);
    }
    return role;
  }

  @ApiOperation({ summary: 'Assign permissions to a role' })
  @ApiConsumes('application/json')
  @ApiBody({
    required: true,
    type: AssignPermissionsDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Permissions assigned successfully',
  })
  @ApiResponse({ status: 404, description: 'Role not found' })
  @Post(':id/permissions')
  @Permissions('update-role')
  async assignPermissions(
    @Param('id') id: string,
    @Body() assignPermissionsDto: AssignPermissionsDto,
  ) {
    return this.roleService.assignPermissions(
      id,
      assignPermissionsDto.permissionIds,
    );
  }

  @Post(':roleId/users/:userId')
  @Permissions('update-role')
  async assignRoleToUser(
    @Param('roleId') roleId: string,
    @Param('userId') userId: string,
  ) {
    return this.roleService.assignRoleToUser(userId, roleId);
  }
}
