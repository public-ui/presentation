<template>
  <header v-if="logoHeader">
    <img :src="logoSrc" width="60" height="60" class="object-contain" />
  </header>
  <header v-if="showQR">
    <img
      class="m-auto absolute right-2em w-10 pb-10"
      src="/assets/qr-code2.png"
    />
  </header>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
// import { resolveAssetUrl } from "@slidev/client/layoutHelper.ts";

function resolveAssetUrl(url: string) {
  if (url.startsWith("/")) return import.meta.env.BASE_URL + url.slice(1);
  return url;
}

const props = defineProps({
  logoHeader: {
    type: String,
  },
  showQR: {
    default: true,
    type: Boolean,
  },
});
const logoSrc = computed(() => resolveAssetUrl(props.logoHeader));
</script>
