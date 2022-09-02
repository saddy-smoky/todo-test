<template>
  <div class="add-task" :class="{ focused: inputIsFocused }">
    <div class="add-task__inner">
      <button type="button" class="add-task__add-btn">
        <plusSVG />
      </button>

      <label class="add-task__input" for="add-task">
        <input
          :placeholder="INPUT_PLACEHOLDER"
          type="text"
          id="add-task"
          @focus="inputIsFocused = true"
          @blur="inputIsFocused = false"
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import plusSVG from "@/assets/icons/plus.svg";
import { INPUT_PLACEHOLDER } from "@/components/constants";
import { ref } from "vue";

const inputIsFocused = ref<boolean>(false);
</script>
