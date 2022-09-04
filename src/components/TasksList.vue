<template>
  <section :class="{ 'tasks-list--completed': isCompleted }" class="tasks-list">
    <div v-if="isCompleted" class="tasks-list__completed-sign">
      <checkSVG />

      <span>{{ COMPLETED_SIGN_TEXT }}</span>
    </div>

    <TransitionGroup>
      <TaskEl
        v-for="task in tasksList"
        :task="task"
        :key="task.id"
        @emitDeletion="emitDeletionHandler"
        @emitEditing="emitEditingHandler"
      />
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import type { Task } from "@/components/types";

import { COMPLETED_SIGN_TEXT } from "@/components/constants";

import TaskEl from "@/components/TaskEl.vue";
import checkSVG from "@/assets/icons/check.svg";

import { useTasksStore } from "@/store";
const { setTaskEditing, setTaskDeletion } = useTasksStore();

defineProps<{
  tasksList: Task[] | undefined;
  isCompleted?: boolean;
}>();

const emitDeletionHandler = (taskId: string) => {
  setTaskDeletion(taskId);
};

const emitEditingHandler = (task: Task) => {
  setTaskEditing(task);
};
</script>
