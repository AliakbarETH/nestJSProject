import { Controller, Get } from "@nestjs/common";

@Controller('/user')
export class UserController {
  @Get()
  getUser() {
    return 'I am the user controller';
  }
}