import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Faculty } from '../../faculty/entities/faculty.entity';
@Entity('departements')
export class Departement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  facultyId: number;

  @ManyToOne(() => Faculty, (faculty) => faculty.departements)
  faculty: Faculty;
}
