/* eslint-disable prettier/prettier */
import { CreateTodoDto } from "../dto/create-todo.dto";
import { ITodoRepository } from "./todo.repository.interface";
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";

import { Todo, TodoDocument } from "../schemas/todo.schema";

@Injectable()
export class TodoRepository implements ITodoRepository {
  constructor(
    @InjectModel(Todo.name)
    private readonly _todoRepository: Model<TodoDocument>
  ) {}

  async create({ title, done }: CreateTodoDto): Promise<Todo> {
    try {
      return this._todoRepository.create({ title, done });
    }catch (err) {
      throw new Error("Todo already exists.");
    }
  }
  async findAll(): Promise<Todo[]> {
    try {
      return this._todoRepository.find().sort("title");
    }catch (err) {
      throw new Error("Not exists todos.");
    }
  }
  
}