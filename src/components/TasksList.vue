<template>
  <section :class="{ 'tasks-list--completed': isCompleted }" class="tasks-list">
    <div v-if="isCompleted" class="tasks-list__completed-sign">
      <checkSVG />

      <span>{{ COMPLETED_SIGN_TEXT }}</span>
    </div>

    <TaskEl />
  </section>
</template>

<script setup lang="ts">
import type { ToDo } from "@/components/types";

import { COMPLETED_SIGN_TEXT } from "@/components/constants";

import TaskEl from "@/components/TaskEl.vue";
import checkSVG from "@/assets/icons/check.svg";

const props = defineProps<{
  tasksList: ToDo[];
  isCompleted?: boolean;
}>();
</script>
