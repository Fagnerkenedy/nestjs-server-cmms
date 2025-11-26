import { Repository } from "typeorm";
import { Empresa } from "../entities/empresa.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { NotFoundException } from "@nestjs/common";

export class DeleteEmpresaUseCase {
    constructor(
        @InjectRepository(Empresa)
        private repository: Repository<Empresa>
    ) { }
    async execute(id: number, tenant_id: string) {
        const user = await this.repository.findOne({ where: { id, tenant_id } })
        if (!user) {
            throw new NotFoundException('Registro não encontrado ou não pertence ao tenant');
        }
        return this.repository.delete(id)
    }
}