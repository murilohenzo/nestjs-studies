/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo.module';

const URI = "mongodb"

@Module({
  imports: [MongooseModule.forRoot(URI), TodoModule],
})
export class AppModule {}