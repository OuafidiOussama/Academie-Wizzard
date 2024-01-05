import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('departements')
export class Departement {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    label: string
}
