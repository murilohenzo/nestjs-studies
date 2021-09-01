/* eslint-disable prettier/prettier */
import { CreateTodoDto } from '../dto/create-todo.dto';
import { Todo } from '../interface/todo.interface';

export interface ITodoRepository {
  create({ title, done }: CreateTodoDto): Promise<Todo>;
  findAll(): Promise<Todo[]>;
}
