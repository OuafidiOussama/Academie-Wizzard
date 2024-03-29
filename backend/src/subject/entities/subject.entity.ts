import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('subjects')
export class Subject {
    @PrimaryGeneratedColumn()
    id : number
    
    @Column()
    label : string

    @Column('text')
    description : string
}
