import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DBContoroller } from './db.controller';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';

@Module({
  controllers: [AppController, UserController],
  imports: [UserModule],
})
export class AppModule {}
