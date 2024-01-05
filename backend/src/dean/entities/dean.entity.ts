import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('deans')
export class Dean {
    @PrimaryGeneratedColumn()
    id:number
}
