<template>
  <div
    class="task"
    :class="{
      'task--completed': isTaskCompleted,
      'task--editing': taskEditing,
    }"
  >
    <div class="task__inner">
      <button v-if="!taskEditing" class="task__check" @click="completeTask">
        <span class="task__check-filler">
          <checkSVG />
        </span>
      </button>

      <div
        v-if="!taskEditing"
        class="task__text"
        @dblclick="taskEditing = !taskEditing"
      >
        {{ taskText }}
      </div>

      <div v-if="taskEditing" class="task__edit">
        <input type="text" v-model="taskText" />
      </div>

      <div v-if="!taskEditing" class="task__delete">
        <button type="button" @click="deleteTask">
          <crossSVG />
        </button>
      </div>

      <div v-if="taskEditing" class="task__confirm-edit">
        <button type="button" @click="confirmTaskEdit">
          <checkSVG />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import checkSVG from "@/assets/icons/check.svg";
import crossSVG from "@/assets/icons/cross.svg";

import type { Task } from "@/components/types";
import { defineEmits, ref } from "vue";

const props = defineProps<{
  task: Task;
}>();

const taskEditing = ref(false);
const isTaskCompleted = ref(props.task.completed);
const taskText = ref(props.task.todo);

const completeTask = () => {
  isTaskCompleted.value = !isTaskCompleted.value;

  confirmTaskEdit();
};

const emits = defineEmits(["emitDeletion", "emitEditing"]);

const confirmTaskEdit = () => {
  emits("emitEditing", {
    completed: isTaskCompleted.value,
    todo: taskText.value,
    id: props.task.id,
  } as Task);

  taskEditing.value = false;
};

const deleteTask = () => {
  emits("emitDeletion", props.task.id);
};
</script>
