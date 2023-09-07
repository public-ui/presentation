<script setup lang="ts">
import { KolButton } from "@public-ui/vue";

// variable
const msg = "Hello!";

const on = {
  onClick: console.log,
};

function log() {
  console.log("asd");
}
</script>
<template>
  <KolButton _label="modelValue" @click="log" v-bind:_on="on" />
</template>
