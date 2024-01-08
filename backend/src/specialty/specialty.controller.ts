import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';

import { SpecialtyService } from './specialty.service';
import { CreateSpecialtyDto } from './dto/create-Specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-Specialty.dto';

@Controller('Specialty')
export class SpecialtyController {
  constructor(private readonly SpecialtyService: SpecialtyService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() SpecialtyData: CreateSpecialtyDto) {
    return await this.SpecialtyService.create(SpecialtyData);
  }

  @Get()
  findAll() {
    return this.SpecialtyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.SpecialtyService.findOne(+id);
  }

  @Patch('/update/:id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id') id: string,
    @Body() updateSpecialtyDto: UpdateSpecialtyDto,
  ) {
    return this.SpecialtyService.update(+id, updateSpecialtyDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.SpecialtyService.remove(+id);
  }
}
