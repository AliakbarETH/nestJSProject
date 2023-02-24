import {
  Controller,
  Request,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Delete,
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
  store(@Req() req: Request){
    return this.userService.create(req);
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
    return this.userService.show(param);
  }
}
