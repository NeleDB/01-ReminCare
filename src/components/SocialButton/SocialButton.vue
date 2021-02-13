<template>
	<a class="c-social-button" :href="`${url}`" target="_blank">
		<span class="u-visually-hidden">Social link to {{ icon }}</span>
		<Icon class="c-social-button__icon" :svg="icon" />
	</a>
</template>

<script src="./SocialButton.js"></script>
