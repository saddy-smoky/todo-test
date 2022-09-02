<template>
  <main class="todo-main">
    <h1 class="todo-main__title">{{ title }}</h1>

    <AddTaskForm />

    <TasksList :tasksList="list" />

    <hr />

    <TasksList :isCompleted="true" :tasksList="list" />
  </main>
</template>

<script setup lang="ts">
import { TITLE as title } from "@/components/constants";

import AddTaskForm from "@/components/AddTaskForm.vue";
import TasksList from "@/components/TasksList.vue";
import type { ToDo } from "@/components/types";

const list: ToDo[] = [
  {
    id: "1",
    text: "text",
    completed: false,
    date: Date.now(),
  },
  {
    id: "1",
    text: "text",
    completed: false,
    date: Date.now(),
  },
  {
    id: "1",
    text: "text",
    completed: false,
    date: Date.now(),
  },
];
</script>
