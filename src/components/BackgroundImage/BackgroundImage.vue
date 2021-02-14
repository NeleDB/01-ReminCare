<template>
	<div
		class="c-background-image"
		:style="`background-image: url(${image}); padding-top: ${aspectRatio}%;`"
	>
		<img class="u-visually-hidden" :src="image" :alt="alt" />
	</div>
</template>

<script src="./BackgroundImage.js"></script>
