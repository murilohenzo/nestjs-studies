import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './controller/todos.controller';
import { TodoService } from './service/create-todo.service';
import { FakeTodoRepository } from './repository/fake/create-fake-todo.repository';
import { TodoRepository } from './repository/create-todo.repository';
import { Todo, TodoSchema } from './schemas/todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Todo.name,
        schema: TodoSchema,
      },
    ]),
  ],
  controllers: [TodoController],
  providers: [
    TodoService,
    {
      provide: 'FakeTodoRepository',
      useClass: FakeTodoRepository,
    },
    {
      provide: 'TodoRepository',
      useClass: TodoRepository,
    },
  ],
})
export class TodoModule {}
