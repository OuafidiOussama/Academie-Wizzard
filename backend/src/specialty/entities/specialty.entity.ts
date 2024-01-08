import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Departement } from '../../departement/entities/departement.entity';
@Entity('specialties')
export class Specialty {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    label: string

	@Column()
	departementId:number
	
  @ManyToOne(() => Departement, (departement) => departement.specialties)
  departement: Departement;
}
