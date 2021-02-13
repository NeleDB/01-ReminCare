<template>
	<div class="c-hero l-grid">
		<div
			class="c-hero__content l-container:12/12@to:vp-7 l-container--default-spacing@to:vp-7 l-grid__col:6/12@at:vp-7"
		>
			<span class="c-hero__label">{{ label }}</span>
			<h1 class="c-hero__title">{{ title }}</h1>
			<p class="c-hero__text">{{ text }}</p>

			<Button class="c-hero__button" :text="button" :url="url" />
		</div>

		<div
			class="c-hero__image-container l-grid__col:12/12 l-grid__col:6/12@at:vp-7"
			:style="`background-image: url(${image})`"
		>
			<img
				class="c-hero__image u-visually-hidden"
				:src="image"
				:alt="alt"
			/>
		</div>
	</div>
</template>

<script src="./Hero.js"></script>
