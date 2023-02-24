import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DBContoroller } from './db.controller';

@Module({
  controllers: [ AppController, DBContoroller],
})
export class AppModule {}
