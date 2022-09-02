<template>
  <div class="task">
    <div class="task__inner">
      <div class="task__check">
        <input type="checkbox" hidden />
        <span class="task__check-filler">
          <checkSVG />
        </span>
      </div>
    </div>

    <div class="task__text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
      molestias?
    </div>

    <div class="task__delete">
      <button type="button">
        <crossSVG />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import checkSVG from "@/assets/icons/check.svg";
import crossSVG from "@/assets/icons/cross.svg";
</script>
