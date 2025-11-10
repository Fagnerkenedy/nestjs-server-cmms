import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    razaoSocial: string;

    @Column()
    tenantId: string;
}