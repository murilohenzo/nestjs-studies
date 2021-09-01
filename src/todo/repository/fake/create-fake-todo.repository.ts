/* eslint-disable prettier/prettier */
import { CreateTodoDto } from "../../dto/create-todo.dto";
import { Todo } from "../../interface/todo.interface";
import { ITodoRepository } from "../todo.repository.interface";
import { Injectable } from '@nestjs/common';

import { uuid } from 'uuidv4';

@Injectable()
export class FakeTodoRepository implements ITodoRepository {
  private readonly _todoRepository: Todo[] = [];

  async create({ title, done }: CreateTodoDto): Promise<Todo> {
    try {
      const createdTodoDto = new CreateTodoDto();
      createdTodoDto.title = title;
      createdTodoDto.done = done;

      Object.assign(createdTodoDto, { id: uuid() })

      this._todoRepository.push(createdTodoDto);
      return createdTodoDto;
    }catch (err) {
      throw new Error("Todo already exists.");
    }
  }
  async findAll(): Promise<Todo[]> {
    try {
      return await this._todoRepository;
    }catch (err) {
      throw new Error("Not exists todos.");
    }
  }
}