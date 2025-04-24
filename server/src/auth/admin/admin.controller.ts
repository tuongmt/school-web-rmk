import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { CreateUserDto } from '../dto/create-user.dto';
import { Permissions } from '../decorators/permissions.decorator';
import {
  ApiOperation,
  ApiConsumes,
  ApiBody,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('admin')
@ApiTags('Admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiBody({
    description: 'Data for creating a user and associated profile',
    type: CreateUserDto,
  })
  @ApiResponse({ status: 201, description: 'User created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post('create-user')
  @Permissions('create-user')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.adminService.createUser(createUserDto);
  }
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Users fetched successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Get('users')
  @Permissions('view-user')
  async getAllUsers(@Query() query: any) {
    return this.adminService.getAllUsers(query);
  }

  // lấy user theo id
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({ status: 200, description: 'User fetched successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @Get('users/:id')
  @Permissions('view-user')
  async getUserById(@Param('id') id: string) {
    return this.adminService.getUserById(id);
  }
}
