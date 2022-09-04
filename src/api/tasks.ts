import type { MockTodoList, Task } from "@/components/types";

export default {
  async getTasks(): Promise<MockTodoList> {
    return await fetch("https://dummyjson.com/todos?limit=10&skip=4").then(
      (res) => res.json()
    );
  },

  async addNewTask(task: Omit<Task, "id">): Promise<Task> {
    return await fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then((res) => res.json());
  },

  async deleteTask(taskId: string): Promise<Task> {
    return await fetch(`https://dummyjson.com/todos/${taskId}`, {
      method: "DELETE",
    }).then((res) => res.json());
  },

  async updateTask(taskInfo: {
    id: string;
    completed: boolean;
  }): Promise<Task> {
    return await fetch(`https://dummyjson.com/todos/${taskInfo.id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: taskInfo.completed,
      }),
    }).then((res) => res.json());
  },
};
