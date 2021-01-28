<template>
	<NuxtLink v-if="url" class="c-app-logo" :to="url">
		<slot />
	</NuxtLink>

	<div class="c-app-logo" v-else>
		<slot />
	</div>
</template>

<script src="./AppLogoRoot.js"></script>
