import { Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';
import { CreateEmpresaUseCase } from './usecases/create-empresa.usecase';
import { DeleteEmpresaUseCase } from './usecases/delete-empresa.usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from './entities/empresa.entity';
import { Repository } from 'typeorm';
import { ListEmpresaUseCase } from './usecases/list-empresa.usecase';
import { FindEmpresaUseCase } from './usecases/find-empresa.usecase';
import { UpdateEmpresaUseCase } from './usecases/update-empresa.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa])],
  controllers: [EmpresasController],
  providers: [ListEmpresaUseCase, FindEmpresaUseCase, CreateEmpresaUseCase, UpdateEmpresaUseCase, DeleteEmpresaUseCase, Repository],
})
export class EmpresasModule {}
