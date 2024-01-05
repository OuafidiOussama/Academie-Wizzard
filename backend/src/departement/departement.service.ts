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
    private readonly DepartementRepository: Repository<Departement>
  ){}
  
  async create(DepartementData: CreateDepartementDto) {
    const departement = this.DepartementRepository.create(DepartementData)
    return await this.DepartementRepository.save(departement)
  }

  async findAll() {
    return await this.DepartementRepository.find();
  }

  async findOne(id: number) {
    const departement = await this.DepartementRepository.findOne({
      where: { id },
    });
    if (!departement) {
      throw new NotFoundException();
    }
    return departement;
  }

  async update(id: number, DepartementData: UpdateDepartementDto) {
    const departement = await this.findOne(id);
    if (!departement) {
      throw new NotFoundException()
    }
    Object.assign(departement, DepartementData);

    return await this.DepartementRepository.save(departement)
  }

  async remove(id: number) {
    const departement = await this.findOne(id);
    if (!departement) {
      throw new NotFoundException()
    }
    return await this.DepartementRepository.remove(departement);
  }
}
