import { Module } from '@nestjs/common';
import { TodoController } from './controller/todos.controller';
import { TodoService } from './service/create-todo.service';
import { TodoRepository } from './repository/create-todo.repository';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class AppModule {}
