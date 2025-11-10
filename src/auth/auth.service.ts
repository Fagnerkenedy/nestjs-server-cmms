import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor (
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async signIn(userName: string, pass: string): Promise<{ access_token: string }> {
        const user = await this.usersService.findByName(userName);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.firstName }
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}
