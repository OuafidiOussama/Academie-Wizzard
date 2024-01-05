import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('teachers')
export class Teacher {
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        default: ()=>'NOW()'
    })
    serviceStart: Date
}
