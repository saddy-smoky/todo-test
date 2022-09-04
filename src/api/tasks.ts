import type { MockTodoList, Task } from "@/components/types";

export default {
  async getTasks(): Promise<MockTodoList> {
    return await fetch("https://dummyjson.com/todos?limit=10&skip=4").then(
      (res) => res.json()
    );
  },

  async addNewTask(task: Omit<Task, "id">): Promise<Task> {
    return fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(async (res) => {
      const data = await res.json();

      if (!res.ok) {
        const error = (data && data.message) || res.status;
        return Promise.reject(error);
      }

      return data;
    });
  },

  async deleteTask(taskId: string): Promise<Task> {
    return fetch(`https://dummyjson.com/todos/${taskId}`, {
      method: "DELETE",
    }).then(async (res) => {
      const data = await res.json();

      if (!res.ok) {
        const error = (data && data.message) || res.status;
        return Promise.reject(error);
      }

      return data;
    });
  },

  async updateTask(task: Task): Promise<Task> {
    const { completed } = task;

    return fetch(`https://dummyjson.com/todos/${task.id}`, {
      method: "PATCH" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    }).then(async (res) => {
      const data = await res.json();

      if (!res.ok) {
        const error = (data && data.message) || res.status;
        return Promise.reject(error);
      }

      return data;
    });
  },
};
