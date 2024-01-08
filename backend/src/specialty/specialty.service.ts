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
    private readonly specialtyRepository: Repository<Specialty>
  ) {}

  async create(specialtyData: CreateSpecialtyDto) {
    const { departementId, ...rest } = specialtyData;

    if (!departementId) {
      throw new NotFoundException('departementId is required');
    }

    const specialty = this.specialtyRepository.create({
      ...rest,
      departementId
    });
    return await this.specialtyRepository.save(specialty);
  }

  async findAll() {
    return await this.specialtyRepository.find({ relations: ['departement'] });
  }

  async findOne(id: number) {
    const specialty = await this.specialtyRepository.findOne({ where: { id }, relations: ['departement'] });

    if (!specialty) {
      throw new NotFoundException();
    }

    return specialty;
  }

  async update(id: number, specialtyData: UpdateSpecialtyDto) {
    const specialty = await this.findOne(id);

    if (!specialty) {
      throw new NotFoundException();
    }

    Object.assign(specialty, specialtyData);
    return await this.specialtyRepository.save(specialty);
  }

  async remove(id: number) {
    const specialty = await this.findOne(id);

    if (!specialty) {
      throw new NotFoundException();
    }

    return await this.specialtyRepository.remove(specialty);
  }
}
