import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";

export class ListUserUseCase {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>
    ) {}
    execute(tenantId: string) {
        return this.repository.find({ where: { tenantId }})
    }
}