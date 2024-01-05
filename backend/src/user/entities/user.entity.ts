import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Fname: string

    @Column()
    Lname: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    phone: number

    @Column()
    role: string
}
