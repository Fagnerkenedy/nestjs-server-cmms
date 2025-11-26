import { Repository } from 'typeorm';
import { Empresa } from '../entities/empresa.entity';
import { UpdateEmpresaDto } from '../dto/update-empresa.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UpdateEmpresaUseCase {
    constructor(
        @InjectRepository(Empresa)
        private readonly empresaRepository: Repository<Empresa>,
    ) { }
    async execute(id: number, updateEmpresaDto: UpdateEmpresaDto, tenant_id: string) {
        const user = await this.empresaRepository.findOne({ where: { id, tenant_id } })

        if (!user) {
            throw new NotFoundException('Registro não encontrado ou não pertence ao tenant');
        }

        Object.assign(user, updateEmpresaDto)

        return this.empresaRepository.save(user)
    }
}
