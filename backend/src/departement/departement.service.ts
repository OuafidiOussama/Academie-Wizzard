import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Departement } from './entities/departement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartementService {
  constructor(
    @InjectRepository(Departement)
    private readonly departementRepository: Repository<Departement>,
  ) {}

  async create(departementData: CreateDepartementDto) {
    const { facultyId, ...rest } = departementData;
    const departement = this.departementRepository.create(rest);
    if (!facultyId) {
      throw new NotFoundException('FacultyId is required');
    }

    departement.facultyId = facultyId;

    return await this.departementRepository.save(departement);
  }

  async findAll() {
    return await this.departementRepository.find({ relations: ['faculty'] });
  }

  async findOne(id: number) {
    const departement = await this.departementRepository.findOne({
      where: { id },
      relations: ['faculty'],
    });

    if (!departement) {
      throw new NotFoundException();
    }

    return departement;
  }

  async update(id: number, departementData: UpdateDepartementDto) {
    const departement = await this.findOne(id);

    if (!departement) {
      throw new NotFoundException();
    }

    const { facultyId, ...rest } = departementData;

    if (facultyId !== undefined) {
      departement.facultyId = facultyId;
    }

    Object.assign(departement, rest);

    return await this.departementRepository.save(departement);
  }

  async remove(id: number) {
    const departement = await this.findOne(id);

    if (!departement) {
      throw new NotFoundException();
    }

    return await this.departementRepository.remove(departement);
  }
}
