<template>
  <div class="add-task">
    <div class="add-task__inner">
      <button type="button" class="add-task__add-btn">
        <plusSVG />
      </button>

      <label class="add-task__input" for="add-task">
        <input type="text" id="add-task" />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import plusSVG from "@/assets/icons/plus.svg";
</script>
