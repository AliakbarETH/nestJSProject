import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DBContoroller } from './db.controller';
import { UserController } from './user/user.controller';

@Module({
  controllers: [AppController, DBContoroller, UserController],
})
export class AppModule {}
