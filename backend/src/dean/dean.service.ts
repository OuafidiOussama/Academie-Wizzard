import { Injectable } from '@nestjs/common';
import { CreateDeanDto } from './dto/create-dean.dto';
import { UpdateDeanDto } from './dto/update-dean.dto';

@Injectable()
export class DeanService {
  create(createDeanDto: CreateDeanDto) {
    return 'This action adds a new dean';
  }

  findAll() {
    return `This action returns all dean`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dean`;
  }

  update(id: number, updateDeanDto: UpdateDeanDto) {
    return `This action updates a #${id} dean`;
  }

  remove(id: number) {
    return `This action removes a #${id} dean`;
  }
}
