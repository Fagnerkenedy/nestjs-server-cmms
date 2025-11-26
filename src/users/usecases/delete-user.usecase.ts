import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { NotFoundException } from "@nestjs/common";

export class DeleteUserUseCase {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>
    ) { }
    async execute(id: number, tenantId: string) {
        const user = await this.repository.findOne({ where: { id, tenantId } })
        if (!user) {
            throw new NotFoundException('Registro não encontrado ou não pertence ao tenant');
        }
        return this.repository.delete(id)
    }
}