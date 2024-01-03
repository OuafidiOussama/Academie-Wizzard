import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Faculty {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    label : string

    @Column()
    address : string
}
