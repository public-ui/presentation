<template>
  <footer
    v-if="website || handle"
    class="mt-auto grid grid-cols-3 justify-between w-full text-gray-500 dark:text-white"
  >
    <small>{{
      Intl.DateTimeFormat("de-DE", { month: "long", year: "numeric" }).format(
        Date.now()
      )
    }}</small>
    <small class="text-center">
      <strong>KoliBri</strong> - Component-Library for the Accessability
    </small>
    <small class="text-right">{{ handle }}</small>
  </footer>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  website: {
    type: String,
  },
  middle: {
    type: String,
  },
  handle: {
    type: String,
  },
});
</script>
