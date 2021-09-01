import { Module } from '@nestjs/common';
import { TodoController } from './controller/todos.controller';
import { TodoService } from './service/create-todo.service';
import { FakeTodoRepository } from './repository/fake/create-fake-todo.repository';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [
    TodoService,
    {
      provide: 'FakeTodoRepository',
      useClass: FakeTodoRepository,
    },
  ],
})
export class TodoModule {}
