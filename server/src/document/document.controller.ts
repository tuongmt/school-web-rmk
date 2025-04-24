import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { Permissions } from '../auth/decorators/permissions.decorator';
import { RolesGuard } from '../auth/guard/roles.guard';

@ApiTags('Documents')
@Controller('documents')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  // Thêm thông tin mới
  @ApiOperation({ summary: 'Create a new document' })
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiBody({
    description: 'Data for creating a document',
    type: CreateDocumentDto,
  })
  @ApiResponse({ status: 201, description: 'Document created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  @Permissions('create-document')
  async createDocument(@Body() data: CreateDocumentDto) {
    return this.documentService.createDocument(data);
  }

  // Lấy toàn bộ thông tin
  @ApiOperation({ summary: 'Get all documents' })
  @ApiResponse({ status: 200, description: 'Documents fetched successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  @Permissions('view-document')
  async getDocuments(@Query() query: any) {
    return this.documentService.getDocuments(query);
  }

  // lấy thông tin theo id
  @ApiOperation({ summary: 'Get a document by ID' })
  @ApiResponse({ status: 200, description: 'Document fetched successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  @Permissions('view-document')
  async getDocumentById(@Param('id') id: string) {
    return this.documentService.getDocumentById(id);
  }

  // Cập nhật thông tin
  // validate dữ liệu
  @ApiOperation({ summary: 'Update a document by ID' })
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiBody({ type: UpdateDocumentDto })
  @ApiResponse({ status: 200, description: 'Document updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  @Permissions('update-document')
  async updateDocument(
    @Param('id') id: string,
    @Body() data: UpdateDocumentDto,
  ) {
    return this.documentService.updateDocument(id, data);
  }

  // Xóa thông tin
  // validate dữ liệu
  @ApiOperation({ summary: 'Delete a document by ID' })
  @ApiResponse({ status: 200, description: 'Document deleted successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  @Permissions('delete-document')
  async deleteDocument(@Param('id') id: string) {
    return this.documentService.deleteDocument(id);
  }
}
