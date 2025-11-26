import { Repository } from "typeorm";
import { Empresa } from "../entities/empresa.entity";
import { InjectRepository } from "@nestjs/typeorm";

export class ListEmpresaUseCase {
    constructor(
        @InjectRepository(Empresa)
        private repository: Repository<Empresa>
    ) {}
    execute(tenant_id: string) {
        return this.repository.find({ where: { tenant_id }})
    }
}