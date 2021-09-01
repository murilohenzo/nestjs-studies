/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { Todo } from '../interface/todo.interface';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  done: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);