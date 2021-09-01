import { Body, Controller, Get, HttpCode, Inject, Post } from '@nestjs/common';
import {
  ApiOperation,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { Todo } from '../interface/todo.interface';
import { TodoService } from '../service/create-todo.service';

@ApiTags('/api/v1/todos')
@Controller('/api/v1/todos')
export class TodoController {
  constructor(
    @Inject('FakeTodoRepository')
    private readonly _todoService: TodoService,
  ) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({
    summary: 'Create todo.',
  })
  @ApiOkResponse({
    description: 'Todo created successfully.',
    type: CreateTodoDto,
  })
  @ApiNotFoundResponse({ description: 'Todo already exists.' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  async create(@Body() todo: CreateTodoDto): Promise<Todo> {
    return await this._todoService.create(todo);
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: 'Get all todos',
  })
  @ApiOkResponse({
    description: 'Retrieve list of todos successfully',
    type: [CreateTodoDto],
  })
  @ApiNotFoundResponse({ description: 'Not exists todos.' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  async findAll(): Promise<Todo[]> {
    return await this._todoService.findAll();
  }
}
