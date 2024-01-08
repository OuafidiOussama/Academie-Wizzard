import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(StudentData: CreateStudentDto) {
    const student = this.studentRepository.create(StudentData);
    return await this.studentRepository.save(student);
  }

  async findAll() {
    return await this.studentRepository.find();
  }

  async findOne(id: number) {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException();
    }
    return student;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.findOne(id);
    if (!student) {
      throw new NotFoundException();
    }
    Object.assign(student, updateStudentDto);
    return await this.studentRepository.save(student);
  }

  async remove(id: number) {
    const student = await this.findOne(id);
    if (!student) {
      throw new NotFoundException();
    }
    return await this.studentRepository.remove(student);
  }
}
