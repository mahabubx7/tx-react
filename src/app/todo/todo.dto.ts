export interface Todo {
  _id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: string | number;
}

export type CreateTodoDto = {
  title: string;
  completed?: boolean;
};

export type UpdateTodoDto = Partial<CreateTodoDto>;
