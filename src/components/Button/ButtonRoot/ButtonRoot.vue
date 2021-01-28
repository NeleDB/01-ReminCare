<template>
	<a v-if="target" class="c-button" :href="url" :target="target" :rel="rel">
		<slot />
	</a>

	<NuxtLink v-else-if="url" class="c-button" :to="url">
		<slot />
	</NuxtLink>

	<button
		v-else
		class="c-button"
		:type="!type ? 'button' : type"
		@click.prevent="click"
	>
		<slot />
	</button>
</template>

<script src="./ButtonRoot.js"></script>
