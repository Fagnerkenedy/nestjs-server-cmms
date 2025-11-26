import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator"

export class CreateUserDto {
    @ApiProperty({ example: 'Minha empresa' })
    @IsNotEmpty({ message: 'O campo "nome" é obrigatório' })
    @IsString({ message: 'O campo "nome" é inválido' })
    @Length(1, 50, { message: 'O campo "nome" deve conter entre 1 e 50 caracteres' })
    firstName: string

    @IsOptional()
    lastName: string
    password: string
}