import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('specialties')
export class Specialty {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    label: string
}
