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
        @emitCompletion="emitCompletionHandler"
        @emitDeletion="emitDeletionHandler"
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

const { setTaskCompletion, setTaskDeletion } = useTasksStore();

const props = defineProps<{
  tasksList: Task[] | undefined;
  isCompleted?: boolean;
}>();

const emitCompletionHandler = (taskInfo: {
  id: string;
  completed: boolean;
}) => {
  setTaskCompletion(taskInfo);
};

const emitDeletionHandler = (taskId: string) => {
  setTaskDeletion(taskId);
};
</script>
