import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfiguration {
  constructor(
  ) {}

  get port(): number {
    return parseInt(process.env.PORT, 10); 
  }

  get bodyLimit(): string {
    const bodyLimit = process.env.BODY_LIMIT;
    return bodyLimit ?? '2mb';
  }
}
