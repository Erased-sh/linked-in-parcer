import { Injectable } from '@nestjs/common';
import { authConfig } from './constants';

@Injectable()
export class AppService {
  getHello(): string {
    return authConfig.user;
  }
}
