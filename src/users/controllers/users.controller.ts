import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { ListUserUseCase } from "../usecases/list-user.usecase";
import { FindUserUseCase } from "../usecases/find-user.usecase";
import { CreateUserUseCase } from "../usecases/create-user.usecase";
import { UpdateUserUseCase } from "../usecases/update-user.usecase";
import { DeleteUserUseCase } from "../usecases/delete-user.usecase";
import { Public } from "src/auth/decorators/public.decorator";
import { Tenant } from "../decorators/tenant.decorator";

@Controller('users')
export class UsersController {
    constructor(
        private listUserUseCase: ListUserUseCase,
        private findUserUseCase: FindUserUseCase,
        private createUserUseCase: CreateUserUseCase,
        private updateUserUseCase: UpdateUserUseCase,
        private deleteUserUseCase: DeleteUserUseCase,
    ) { }

    @Get()
    @ApiOperation({ summary: 'Listar usuários' })
    findAll(@Tenant() tenantId) {
        return this.listUserUseCase.execute(tenantId);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Encontrar usuário' })
    findOne(@Param('id') id: number, @Tenant() tenantId) {
        return this.findUserUseCase.execute(id, tenantId);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Criar usuário' })
    create(@Body() createUserDto: CreateUserDto, @Tenant() tenantId) {
        return this.createUserUseCase.execute(createUserDto, tenantId);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Atualizar usuário' })
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto, @Tenant() tenantId) {
        return this.updateUserUseCase.execute(id, updateUserDto, tenantId)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Deletar usuário' })
    remove(@Param('id') id: number, @Tenant() tenantId) {
        return this.deleteUserUseCase.execute(+id, tenantId);
    }
}