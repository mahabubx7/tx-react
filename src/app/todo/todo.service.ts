import { CreateTodoDto, Todo, UpdateTodoDto } from './todo.dto';
import { TodoModel } from './todo.model';

export class TodoService {
  constructor(private readonly model = TodoModel) {}

  public async getTodos(): Promise<Todo[]> {
    return await this.model.find();
  }

  public async getTodoById(todoId: string): Promise<Todo | null> {
    return await this.model.findById(todoId);
  }

  public async addTodo(payload: CreateTodoDto): Promise<Todo> {
    const todo = new this.model(payload);
    return await todo
      .save()
      .then((doc) => {
        return doc;
      })
      .catch((err) => {
        throw err;
      });
  }

  public async updateTodo(
    todoId: string,
    todo: UpdateTodoDto,
  ): Promise<Todo | null> {
    return await this.model.findByIdAndUpdate(todoId, todo, { new: true });
  }

  public async deleteTodo(todoId: string): Promise<Todo | null> {
    return await this.model.findByIdAndDelete(todoId);
  }
}
