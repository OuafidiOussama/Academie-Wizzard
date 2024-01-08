import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Controller('Subject')
export class SubjectController {
  constructor(private readonly SubjectService: SubjectService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() SubjectData: CreateSubjectDto) {
    return await this.SubjectService.create(SubjectData);
  }

  @Get()
  findAll() {
    return this.SubjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.SubjectService.findOne(+id);
  }

  @Patch('/update/:id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.SubjectService.update(+id, updateSubjectDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.SubjectService.remove(+id);
  }
}
