import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Specialty } from './entities/specialty.entity';
import { Repository } from 'typeorm';


@Injectable()
export class SpecialtyService {

  constructor(
    @InjectRepository(Specialty)
    private readonly SpecialtyRepository: Repository<Specialty>
  ){}
  
  async create(SpecialtyData: CreateSpecialtyDto) {
    const specialty = this.SpecialtyRepository.create(SpecialtyData)
    return await this.SpecialtyRepository.save(specialty)
  }

  async findAll() {
    return await this.SpecialtyRepository.find();
  }

  async findOne(id: number) {
    const specialty = await this.SpecialtyRepository.findOne({ where: { id } });
    if (!specialty) {
      throw new NotFoundException();
    }
    return specialty;
  }

  async update(id: number, SpecialtyData: UpdateSpecialtyDto) {
    const specialty = await this.findOne(id);
    if (!specialty) {
      throw new NotFoundException()
    }
    Object.assign(specialty, SpecialtyData);

    return await this.SpecialtyRepository.save(specialty)
  }

  async remove(id: number) {
    const specialty = await this.findOne(id);
    if (!specialty) {
      throw new NotFoundException()
    }
    return await this.SpecialtyRepository.remove(specialty);
  }
}
