import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('results')
export class Result {
    @PrimaryGeneratedColumn()
    id: number
}
