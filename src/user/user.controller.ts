import {
  Controller,
  Request,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Delete,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  private userService;
  constructor() {
    this.userService = new UserService();
  }
  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  store(@Body() body: any){
    return this.userService.create(body);
  }

  @Patch('/:userID')
  update(@Req() req: Request, @Param() param: { userID: number }) {
    return this.userService.update(req, param);
  }

  @Get('/:userID')
  getUser(@Param() param: { userID: number }) {
    return this.userService.getUser(param);
  }
  @Delete('/:userID')
  deleteUser(@Param() param: { userID: number }) {
    return this.userService.delete(param);
  }
}
