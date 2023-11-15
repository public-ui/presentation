<template>
	<default>
		<div v-bind:data-theme="value" class="grid grid-cols-2 items-center">
			<div>
				<slot />
			</div>
			<div class="grid gap-2">
				<p><br /></p>
				<div class="p-2 grid grid-cols-[1.5fr_1fr] items-center">
					<div class="grid gap-2">
						<div class="text-center">
							<KolButton _label="Primary" _icons="codicon codicon-home" _variant="primary" />
						</div>
						<div class="text-center">
							<KolButton _label="Secondary" v-bind:_icons="{ right: 'codicon codicon-edit' }" _variant="secondary" />
						</div>
						<div class="text-center">
							<KolButton _label="Danger" _icons="codicon codicon-trash" _variant="danger" />
						</div>
						<div class="text-center">
							<KolButton _label="Ghost" v-bind:_icons="{ right: 'codicon codicon-lightbulb' }" _variant="ghost" />
						</div>
					</div>
					<div class="grid gap-2">
						<div class="text-center">
							<KolButton _label="Primary" _icons="codicon codicon-home" _hide-label _variant="primary" />
						</div>
						<div class="text-center">
							<KolButton
								_label="Secondary"
								_icons="codicon codicon-edit"
								_hide-label
								_tooltip-align="right"
								_variant="secondary"
							/>
						</div>
						<div class="text-center">
							<KolButton
								_label="Danger"
								_icons="codicon codicon-trash"
								_hide-label
								_tooltip-align="bottom"
								_variant="danger"
							/>
						</div>
						<div class="text-center">
							<KolButton
								_label="Ghost"
								_icons="codicon codicon-lightbulb"
								_hide-label
								_tooltip-align="left"
								_variant="ghost"
							/>
						</div>
					</div>
				</div>
				<div slot="footer" class="p-2 pb-0 grid grid-cols-[1fr_auto] gap-4">
					<KolSelect
						_label="Styleguide auswählen"
						_hide-label
						v-bind:_options="options"
						v-bind:_on="on"
						v-bind:_value="[value]"
					/>
					<KolButton
						class="pt-2"
						_label="Übernehmen"
						_icons="codicon codicon-reply"
						_hide-label
						@click="buttonOn.onClick"
						v-bind:_on="buttonOn"
						_variant="secondary"
					/>
				</div>
				<small class="pl-3 text-gray-600"
					>Wählen Sie einen Styleguide aus, um die Farben und das Design zu ändern.</small
				>
			</div>
		</div>
	</default>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Default from '../theme/layouts/default.vue';
import { KolButton, KolSelect } from '@public-ui/vue';

const options = [
	{
		label: 'Bundesministerium der Finanzen',
		value: 'bmf',
	},
	{
		disabled: true,
		label: 'Bundeszentralamt für Steuern',
		value: 'bzst',
	},
	{
		label: 'Default',
		value: 'default',
	},
	{
		label: 'European Commission',
		value: 'ecl-ec',
	},
	{
		label: 'European Union',
		value: 'ecl-eu',
	},
	{
		label: 'Informationstechnikzentrum Bund',
		value: 'itzbund',
	},
	{
		label: 'Generalzolldirektion (v1)',
		value: 'mapz',
	},
	{
		label: 'Generalzolldirektion (v2)',
		value: 'zoll-v2',
	},
	{
		label: 'Generalzolldirektion (v3)',
		value: 'zoll-v3',
	},
	{
		label: 'Freistaat Thüringen',
		value: 'th',
	},
];

const local = window.localStorage.getItem('kolibri');
let value = 'default';
if (local) {
	try {
		const json = JSON.parse(local);
		if (typeof json.theme === 'string') {
			value = json.theme;
		}
	} catch (e) {}
}

const on = {
	onChange: (_event, v) => {
		if (Array.isArray(v) && typeof v[0] === 'string' && value !== v[0]) {
			window.localStorage.setItem(
				'kolibri',
				JSON.stringify({
					theme: v[0],
				}),
			);
		}
	},
};

const buttonOn = {
	onClick: () => {
		console.log('click');
		window.location.reload();
	},
};

defineComponent({ Default });
</script>
