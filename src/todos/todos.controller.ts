import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Res() response, @Body() createTodoDto: CreateTodoDto) {
    const createdTodo = await this.todosService.create(createTodoDto);
    return response.status(HttpStatus.CREATED).json(createdTodo);
  }

  @Get()
  async findAll(@Res() response) {
    const todos = await this.todosService.findAll();
    return response.status(HttpStatus.OK).json(todos);
  }

  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string) {
    const todo = await this.todosService.findOne(id);
    return response.status(HttpStatus.OK).json(todo);
  }

  @Patch(':id')
  async update(
    @Res() response,
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    const updatedTodo = await this.todosService.update(id, updateTodoDto);
    return response.status(HttpStatus.OK).json(updatedTodo);
  }

  @Delete(':id')
  async remove(@Res() response, @Param('id') id: string) {
    const deletedTodo = await this.todosService.remove(id);
    return response.status(HttpStatus.OK).json(deletedTodo);
  }
}
