import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UpdateUserUseCase {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
    ) { }
    async execute(id: number, updateUserDto: UpdateUserDto, tenantId: string) {
        const user = await this.repository.findOne({ where: { id, tenantId } })

        if (!user) {
            throw new NotFoundException('Registro não encontrado ou não pertence ao tenant');
        }

        Object.assign(user, updateUserDto)

        return this.repository.save(user)
    }
}
