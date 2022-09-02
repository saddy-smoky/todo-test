<template>
  <TaskEl />
</template>

<script setup lang="ts">
import type { ToDo } from "@/components/types";

import TaskEl from "@/components/TaskEl.vue";

const props = defineProps<{
  tasksList: ToDo[];
}>();
</script>
