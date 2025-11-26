import { Repository } from "typeorm";
import { Empresa } from "../entities/empresa.entity";
import { InjectRepository } from "@nestjs/typeorm";

export class FindEmpresaUseCase {
    constructor(
        @InjectRepository(Empresa)
        private repository: Repository<Empresa>
    ) {}
    execute(id: number, tenant_id: string) {
        return this.repository.find({ where: {id, tenant_id}})
    }
}