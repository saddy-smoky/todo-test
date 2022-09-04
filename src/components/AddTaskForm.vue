<template>
  <div class="add-task" :class="{ focused: inputIsFocused }">
    <div class="add-task__inner">
      <button type="button" class="add-task__add-btn" @click="addNewTask">
        <plusSVG />
      </button>

      <label class="add-task__input" for="add-task">
        <input
          type="text"
          id="add-task"
          v-model="inputValue"
          :placeholder="INPUT_PLACEHOLDER"
          @focus="inputIsFocused = true"
          @blur="inputIsFocused = false"
          @keydown.enter="addNewTask"
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import plusSVG from "@/assets/icons/plus.svg";
import { INPUT_PLACEHOLDER } from "@/components/constants";
import { ref, defineEmits } from "vue";

const emits = defineEmits(["emitAddNewTask"]);

const inputIsFocused = ref<boolean>(false);
const inputValue = ref<string>("");

const addNewTask = () => {
  emits("emitAddNewTask", inputValue.value.trim());
  inputValue.value = "";
};
</script>
