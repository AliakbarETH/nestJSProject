import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class DBContoroller {
  @Get()
  getDB(): string {
    return 'Hi, I AM database';
  }
  // @Get('/:userID')
  // getUserID(@Param() params: { userID: number }) {
  //   return params;
  // }
  @Get('bro')
  getBro(): string {
    return ' I am the bro ';
  }
  @Delete('/:userID')
  deleteUserID(@Param() params: { userID: number }) {
    return params;
  }

  @Post()
  insertData(@Req() req: Request) {
    //console.log(req.body);
    return req.body;
  }

  @Patch('/:userID')
  update(@Req() req: Request) {
    return req.body;
  }
}
