/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { Todo } from '../interface/todo.interface';
import { ITodoRepository } from '../repository/todo.repository.interface';

@Injectable()
export class TodoService {
  constructor(
    @Inject("FakeTodoRepository")
    private _todoRepository: ITodoRepository
    ) {}
  async create(todo: CreateTodoDto): Promise<Todo> {
    return await this._todoRepository.create(todo);
  }

  async findAll(): Promise<Todo[]> {
    return await this._todoRepository.findAll();
  }
}
