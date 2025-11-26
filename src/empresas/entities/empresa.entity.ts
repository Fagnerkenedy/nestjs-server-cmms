import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Empresa {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    tenant_id: string
}
