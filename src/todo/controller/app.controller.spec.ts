import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todos.controller';
import { TodoService } from '../service/create-todo.service';
import { TodoRepository } from '../repository/create-todo.repository';
import { CreateTodoDto } from '../dto/create-todo.dto';

describe('TodoController', () => {
  let todoController: TodoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService, TodoRepository],
    }).compile();

    todoController = app.get<TodoController>(TodoController);
  });

  describe('Create todo', () => {
    it('should be able create new todo', async () => {
      expect(
        await todoController.create({ title: 'New todo', done: true }),
      ).toHaveProperty('id');
    });
  });

  describe('List todos', () => {
    it('should be able create new todo', async () => {
      await todoController.create({ title: 'New todo', done: true });
      await todoController.create({ title: 'New todo', done: true });
      await todoController.create({ title: 'New todo', done: true });
      expect(await todoController.findAll()).toHaveLength(3);
    });
  });
});
