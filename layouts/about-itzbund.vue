<template>
	<default :showQR="false">
		<div class="grid gap-16 grid-cols-[20%_auto] ml-10">
			<div>
				<KolLogo _org="ITZBund" class="w-75 m-auto" />
			</div>
			<div>
				<slot></slot>
			</div></div
	></default>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { KolLogo } from '@public-ui/vue';
import Default from '../theme/layouts/default.vue';

const components = defineComponent({ Default });
</script>
