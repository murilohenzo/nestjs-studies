/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { Todo } from '../interface/todo.interface';
import { TodoRepository } from '../repository/create-todo.repository';

@Injectable()
export class TodoService {
  constructor(
    private readonly _todoRepository: TodoRepository
    ) {}
  async create(todo: CreateTodoDto): Promise<Todo> {
    return await this._todoRepository.create(todo);
  }

  async findAll(): Promise<Todo[]> {
    return await this._todoRepository.findAll();
  }
}
