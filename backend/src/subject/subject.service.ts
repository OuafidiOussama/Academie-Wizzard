import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { Repository } from 'typeorm';


@Injectable()
export class SubjectService {

  constructor(
    @InjectRepository(Subject)
    private readonly SubjectRepository: Repository<Subject>
  ){}
  
  async create(SubjectData: CreateSubjectDto) {
    const subject = this.SubjectRepository.create(SubjectData)
    return await this.SubjectRepository.save(subject)
  }

  async findAll() {
    return await this.SubjectRepository.find();
  }

  async findOne(id: number) {
    const subject = await this.SubjectRepository.findOne({
      where: { id },
    });
    if (!subject) {
      throw new NotFoundException();
    }
    return subject;
  }

  async update(id: number, SubjectData: UpdateSubjectDto) {
    const subject = await this.findOne(id);
    if (!subject) {
      throw new NotFoundException()
    }
    Object.assign(subject, SubjectData);

    return await this.SubjectRepository.save(subject)
  }

  async remove(id: number) {
    const subject = await this.findOne(id);
    if (!subject) {
      throw new NotFoundException()
    }
    return await this.SubjectRepository.remove(subject);
  }
}
