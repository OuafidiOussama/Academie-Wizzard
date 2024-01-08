import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Departement } from "../../departement/entities/departement.entity";
@Entity('specialties')
export class Specialty {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name: string

	@Column()
	departementId:number
	
	@ManyToOne(() => Departement, (departement) => departement.specialty)
	departement: Departement;
}
