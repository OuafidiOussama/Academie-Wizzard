import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculty } from './entities/faculty.entity';
import { Repository } from 'typeorm';


@Injectable()
export class FacultyService {

  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>
  ){}
  
  async create(facultyData : CreateFacultyDto) {
    const faculty = this.facultyRepository.create(facultyData)
    return await this.facultyRepository.save(faculty)
  }

  async findAll() {
    return await this.facultyRepository.find();
  }

  async findOne(id: number) {
    const faculty = await this.facultyRepository.findOne({where: { id }});
    if(!faculty){
      throw new NotFoundException();
    }
    return faculty;
  }

  async update(id: number, facultyData: UpdateFacultyDto) {
    const faculty = await this.findOne(id);
    if(!faculty){
      throw new NotFoundException()
    }
    Object.assign(faculty, facultyData);

    return await this.facultyRepository.save(faculty)
  }

  async remove(id: number) {
    const faculty = await this.findOne(id);
    if(!faculty){
      throw new NotFoundException()
    }
    return await this.facultyRepository.remove(faculty);
  }
}
