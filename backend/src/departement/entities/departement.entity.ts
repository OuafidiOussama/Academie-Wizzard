import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Faculty } from '../../faculty/entities/faculty.entity';
import { Specialty } from '../../specialty/entities/specialty.entity';

@Entity('departements')
export class Departement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  facultyId: number;

  @OneToMany(() => Specialty, (specialty) => specialty.departement)
  specialties: Specialty[];

  @ManyToOne(() => Faculty, (faculty) => faculty.departements)
  faculty: Faculty;
}
