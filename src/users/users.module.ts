import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersController } from './controllers/users.controller';
import { ListUserUseCase } from './usecases/list-user.usecase';
import { FindUserUseCase } from './usecases/find-user.usecase';
import { CreateUserUseCase } from './usecases/create-user.usecase';
import { UpdateUserUseCase } from './usecases/update-user.usecase';
import { DeleteUserUseCase } from './usecases/delete-user.usecase';
import { Repository } from 'typeorm';
import { FindByNameUserUseCase } from './usecases/find-by-name-user.usecase';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    ListUserUseCase, 
    FindUserUseCase, 
    CreateUserUseCase, 
    UpdateUserUseCase, 
    DeleteUserUseCase, 
    FindByNameUserUseCase, 
    Repository,
    AuthService,
    JwtService
  ],
  // exports: [UsersService],
})
export class UsersModule {}
