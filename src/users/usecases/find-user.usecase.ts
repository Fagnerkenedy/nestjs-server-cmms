import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";

export class FindUserUseCase {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>
    ) {}
    execute(id: number, tenantId: string) {
        return this.repository.find({ where: {id, tenantId}})
    }
}