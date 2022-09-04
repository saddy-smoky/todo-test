import { defineStore } from "pinia";
import type { MockTodoList, Task } from "@/components/types";
import api from "@/api/tasks";

export const useTasksStore = defineStore({
  id: "tasks",
  state: () => ({
    tasksList: {} as MockTodoList,
    isPending: false,
  }),
  getters: {
    getActiveTasks(): Task[] {
      return this.tasksList?.todos?.filter((item: Task) => !item.completed);
    },
    getCompletedTasks(): Task[] {
      return this.tasksList?.todos?.filter((item: Task) => item.completed);
    },
  },
  actions: {
    async fetchTasks() {
      this.isPending = true;
      this.tasksList = await api.getTasks();
      this.isPending = false;
    },
    setTaskCompletion(taskInfo: { id: string; completed: boolean }) {
      this.isPending = true;

      let newTask: Task;
      const oldTasksList = this.tasksList.todos;
      const oldTaskIndex = oldTasksList.findIndex(
        (item) => +item.id === +taskInfo.id
      );

      api
        .updateTask(taskInfo)
        .then((res: Task) => {
          newTask = res;

          oldTasksList.splice(oldTaskIndex, 1, newTask);

          this.tasksList.todos = oldTasksList;
        })
        .catch((err) => new Error(err))
        .finally(() => {
          this.isPending = false;
        });
    },
    setTaskDeletion(taskId: string) {
      this.isPending = true;

      const oldTasksList = this.tasksList.todos;
      const taskIndex = oldTasksList.findIndex((item) => +item.id === +taskId);

      api
        .deleteTask(taskId)
        .then(() => {
          oldTasksList.splice(taskIndex, 1);

          this.tasksList.todos = oldTasksList;
        })
        .catch((err) => new Error(err))
        .finally(() => {
          this.isPending = false;
        });
    },
    setNewTask(newTaskText: string) {
      this.isPending = true;

      const newTask: Omit<Task, "id"> = {
        todo: newTaskText,
        completed: false,
        userId: 5,
      };
      const oldTasksList = this.tasksList.todos;

      api
        .addNewTask(newTask)
        .then((res) => {
          oldTasksList.push(res);

          this.tasksList.todos = oldTasksList;
        })
        .catch((err) => new Error(err))
        .finally(() => {
          this.isPending = false;
        });
    },
  },
});
