import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Departement {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    label : string

   
}
