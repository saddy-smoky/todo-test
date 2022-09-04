export interface Task {
  id: number;
  todo: string;
  completed: boolean;
  userId?: number;
}

export interface MockTodoList {
  todos: Task[];
  total: number;
  skip: string;
  limit: number;
}
