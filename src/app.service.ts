import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello : ${JSON.stringify(process.env.SECRET)}`;
  }
}
