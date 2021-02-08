<template>
	<article class="c-image-cta l-grid">
		<div
			class="c-image-cta__image-container l-grid__col:12/12 l-grid__col:4/12@at:vp-9"
			:style="`background-image: url(${image})`"
		>
			<img class="u-visually-hidden" :src="image" :alt="alt" />
		</div>

		<div
			class="c-image-cta__content l-grid__col:12/12 l-grid__col:8/12@at:vp-9"
		>
			<h2 class="c-image-cta__title">{{ title }}</h2>
			<p class="c-image-cta__text">{{ text }}</p>

			<Button class="c-image-cta__button" :url="url" :text="button" />
		</div>
	</article>
</template>

<script src="./imageCta.js"></script>
