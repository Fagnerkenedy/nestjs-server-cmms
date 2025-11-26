import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";

export class FindByNameUserUseCase {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>
    ) {}
    execute(firstName: string) {
        return this.repository.findOneBy({firstName})
    }
}