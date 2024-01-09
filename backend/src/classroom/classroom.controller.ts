import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';

@Controller('Classroom')
export class ClassroomController {
  constructor(private readonly ClassroomService: ClassroomService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() classroomData: CreateClassroomDto) {
    return await this.ClassroomService.create(classroomData);
  }

  @Get()
  findAll() {
    return this.ClassroomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ClassroomService.findOne(+id);
  }

  @Patch('/update/:id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id') id: string,
    @Body() updateclassroomDto: UpdateClassroomDto,
  ) {
    return this.ClassroomService.update(+id, updateclassroomDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.ClassroomService.remove(+id);
  }
}
