import { Repository } from 'typeorm';
import { Empresa } from '../entities/empresa.entity';
import { CreateEmpresaDto } from '../dto/create-empresa.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateEmpresaUseCase {
    constructor(
        @InjectRepository(Empresa)
        private readonly empresaRepository: Repository<Empresa>,
    ) { }
    execute(createEmpresaDto: CreateEmpresaDto, tenant_id: string) {
        return this.empresaRepository.insert({...createEmpresaDto, tenant_id});
    }
}
