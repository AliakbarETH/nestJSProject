import { Controller, Get } from '@nestjs/common';

@Controller('obj')
export class AppController {
  @Get()
  getUser() {
    return {
      name: 'Ali',
      age: 123,
    };
  }
}