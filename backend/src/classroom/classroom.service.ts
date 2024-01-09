import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Classroom } from './entities/classroom.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ClassroomService {

  constructor(
    @InjectRepository(Classroom)
    private readonly ClassroomRepository: Repository<Classroom>
  ){}
  
  async create(ClassroomData: CreateClassroomDto) {
    const classroom = this.ClassroomRepository.create(ClassroomData)
    return await this.ClassroomRepository.save(classroom)
  }

  async findAll() {
    return await this.ClassroomRepository.find();
  }

  async findOne(id: number) {
    const classroom = await this.ClassroomRepository.findOne({ where: { id } });
    if (!classroom) {
      throw new NotFoundException();
    }
    return classroom;
  }

  async update(id: number, classroomData: UpdateClassroomDto) {
    const classroom = await this.findOne(id);
    if (!classroom) {
      throw new NotFoundException()
    }
    Object.assign(classroom, classroomData);

    return await this.ClassroomRepository.save(classroom)
  }

  async remove(id: number) {
    const classroom = await this.findOne(id);
    if (!classroom) {
      throw new NotFoundException()
    }
    return await this.ClassroomRepository.remove(classroom);
  }
}
