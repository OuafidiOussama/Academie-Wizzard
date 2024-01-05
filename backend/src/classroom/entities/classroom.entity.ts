import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('classrooms')
export class Classroom {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    number: number

    @Column()
    capacity: number
}
