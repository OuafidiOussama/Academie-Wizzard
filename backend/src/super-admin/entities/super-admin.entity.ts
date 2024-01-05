import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('superadmins')
export class SuperAdmin {
    @PrimaryGeneratedColumn()
    id:number
}
