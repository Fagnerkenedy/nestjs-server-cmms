import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { CreateUserDto } from "../dto/create-user.dto";

export class CreateUserUseCase {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>
    ) {}
    execute(createUserDto: CreateUserDto, tenantId: string) {
        return this.repository.insert({...createUserDto, tenantId})
    }
}