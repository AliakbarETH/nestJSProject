import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('db')
export class DBContoroller {
  @Get()
  getDB(): string {
    return 'Hi, I AM database';
  }
  @Get('/:userID')
  getUserID(@Param() params: {userID: number}) {
    return params;
  }
  @Get('bro')
  getBro(): string {
    return ' I am the bro ';
  }
  @Get('/:userID')
  getUserID(@Param() params: {userID: number}) {
    return params;
  }

  @Post()
  insertData(@Req() req: Request) {
    //console.log(req.body);
    return req.body;
  }

  
}
