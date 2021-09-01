import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { Todo } from '../interface/todo.interface';
import { TodoService } from '../service/create-todo.service';

@Controller('/api/v1/todos')
export class TodoController {
  constructor(private readonly _todoService: TodoService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() todo: CreateTodoDto): Promise<Todo> {
    return await this._todoService.create(todo);
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Todo[]> {
    return await this._todoService.findAll();
  }
}
