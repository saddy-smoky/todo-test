<template>
  <div class="task" :class="{ 'task--completed': task.completed }">
    <div class="task__inner">
      <button class="task__check" @click="setTaskCompletion">
        <span class="task__check-filler">
          <checkSVG />
        </span>
      </button>

      <div class="task__text">
        {{ task.todo }}
      </div>

      <div class="task__delete">
        <button type="button" @click="deleteTask">
          <crossSVG />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import checkSVG from "@/assets/icons/check.svg";
import crossSVG from "@/assets/icons/cross.svg";

import type { Task } from "@/components/types";
import { defineEmits } from "vue";

const props = defineProps<{
  task: Task;
}>();

const emits = defineEmits(["emitCompletion", "emitDeletion"]);

const setTaskCompletion = () => {
  emits("emitCompletion", {
    id: props.task.id,
    completed: !props.task.completed,
  });
};

const deleteTask = () => {
  emits("emitDeletion", props.task.id);
};
</script>
