import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('students')
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    age: number

    @Column({
        default : ()=>'NOW()'
    })
    inscriptionDate : Date
}
