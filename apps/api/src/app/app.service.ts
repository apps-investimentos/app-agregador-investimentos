import { Injectable } from '@nestjs/common';
import { Message } from '@app-agregador-investimentos/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
