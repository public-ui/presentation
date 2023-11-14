<template>
	<default>
		<div class="grid gap-16 grid-cols-[1fr_3fr] ml-10">
			<div>
				<KolKolibri class="w-75 m-auto" />
			</div>
			<div>
				<slot></slot>
			</div>
		</div>
	</default>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Default from '../theme/layouts/default.vue';
import { KolKolibri } from '@public-ui/vue';

const components = defineComponent({ Default });
</script>
