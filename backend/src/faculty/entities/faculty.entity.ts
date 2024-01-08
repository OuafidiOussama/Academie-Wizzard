import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Departement } from "../../departement/entities/departement.entity";

@Entity('faculties')
export class Faculty {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @Column()
    address: string;

    @OneToMany(() => Departement, departement => departement.faculty)
    departements: Departement[];
}
