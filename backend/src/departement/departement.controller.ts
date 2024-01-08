import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { DepartementService } from './departement.service';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';

@Controller('Departement')
export class DepartementController {
  constructor(private readonly DepartementService: DepartementService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() DepartementData: CreateDepartementDto) {
    return await this.DepartementService.create(DepartementData);
  }

  @Get()
  findAll() {
    return this.DepartementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.DepartementService.findOne(+id);
  }

  @Patch('/update/:id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id') id: string,
    @Body() updateDepartementDto: UpdateDepartementDto,
  ) {
    return this.DepartementService.update(+id, updateDepartementDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.DepartementService.remove(+id);
  }
}
