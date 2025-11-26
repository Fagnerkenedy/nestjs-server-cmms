import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Put } from '@nestjs/common';
// import { EmpresasService } from './empresas.service';
import { ListEmpresaUseCase } from './usecases/list-empresa.usecase';
import { CreateEmpresaUseCase } from './usecases/create-empresa.usecase'
import { DeleteEmpresaUseCase } from './usecases/delete-empresa.usecase'
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empresa } from './entities/empresa.entity';
import { ApiOperation } from '@nestjs/swagger';
import { FindEmpresaUseCase } from './usecases/find-empresa.usecase';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { UpdateEmpresaUseCase } from './usecases/update-empresa.usecase';
import { Tenant } from 'src/users/decorators/tenant.decorator';

@Controller('empresas')
export class EmpresasController {
  constructor(
    private readonly listEmpresaUseCase: ListEmpresaUseCase,
    private readonly findEmpresaUseCase: FindEmpresaUseCase,
    private readonly createEmpresaUseCase: CreateEmpresaUseCase,
    private readonly updateEmpresaUseCase: UpdateEmpresaUseCase,
    private readonly deleteEmpresaUseCase: DeleteEmpresaUseCase
  ) { }

  @Get()
  @ApiOperation({ summary: 'Listar empresas' })
  findAll(@Tenant() tenantId) {
    return this.listEmpresaUseCase.execute(tenantId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Encontrar empresa' })
  findOne(@Param('id') id: number, @Tenant() tenantId) {
    return this.findEmpresaUseCase.execute(id, tenantId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Criar empresa' })
  create(@Body() createEmpresaDto: CreateEmpresaDto, @Tenant() tenantId) {
    return this.createEmpresaUseCase.execute(createEmpresaDto, tenantId);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Atualizar empresa' })
  update(@Param('id') id: number, @Body() updateEmpresaDto: UpdateEmpresaDto, @Tenant() tenantId) {
    return this.updateEmpresaUseCase.execute(id, updateEmpresaDto, tenantId)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Deletar empresa' })
  remove(@Param('id') id: number, @Tenant() tenantId) {
    return this.deleteEmpresaUseCase.execute(+id, tenantId);
  }
}
