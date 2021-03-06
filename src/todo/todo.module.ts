import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './controller/todos.controller';
import { TodoService } from './service/create-todo.service';
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
      provide: 'TodoRepository',
      useClass: TodoRepository,
    },
  ],
})
export class TodoModule {}
