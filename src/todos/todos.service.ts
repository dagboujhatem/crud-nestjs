import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from './entities/todo.entity';

@Injectable()
export class TodosService {

  constructor(@InjectModel(Todo.name) private toDoModel: Model<TodoDocument>) {

  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.toDoModel.create(createTodoDto);
  }

  async findAll(): Promise<Todo[]> {
    return this.toDoModel.find();
  }

  async findOne(id: string): Promise<Todo> {
    return this.toDoModel.findById(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.toDoModel.findByIdAndUpdate(id, updateTodoDto, {new: true});
  }

  async remove(id: string): Promise<Todo> {
    return this.toDoModel.findByIdAndDelete(id);
  }
}
