<template>
  <main class="todo-main">
    <div class="todo-main__title">
      <h1>{{ title }}</h1>
    </div>

    <AddTaskForm @emitAddNewTask="emitAddNewTaskHandler" />

    <TasksList :tasksList="activeTasksList" />

    <hr v-if="activeTasksList && activeTasksList.length > 0" />

    <TasksList :isCompleted="true" :tasksList="completedTasksList" />

    <Transition>
      <LoaderEl v-show="isPending" />
    </Transition>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTasksStore } from "@/store";

import { TITLE as title } from "@/components/constants";

import AddTaskForm from "@/components/AddTaskForm.vue";
import TasksList from "@/components/TasksList.vue";
import LoaderEl from "@/components/LoaderEl.vue";

const {
  isPending,
  getActiveTasks: activeTasksList,
  getCompletedTasks: completedTasksList,
} = storeToRefs(useTasksStore());

const { fetchTasks, setNewTask } = useTasksStore();

fetchTasks();

const emitAddNewTaskHandler = (val: string) => {
  setNewTask(val);
};
</script>
