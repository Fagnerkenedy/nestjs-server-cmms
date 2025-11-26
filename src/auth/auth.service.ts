import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FindByNameUserUseCase } from 'src/users/usecases/find-by-name-user.usecase';

@Injectable()
export class AuthService {
    constructor (
        private findByNameUserUseCase: FindByNameUserUseCase,
        private jwtService: JwtService,
    ) {}

    async signIn(userName: string, pass: string): Promise<{ access_token: string }> {
        const user = await this.findByNameUserUseCase.execute(userName);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.firstName, tenantId: user.tenantId }
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}
