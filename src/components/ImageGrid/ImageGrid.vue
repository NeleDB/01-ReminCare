<template>
	<section class="c-image-grid">
		<header class="u-visually-hidden">
			<h2>Gallery</h2>
		</header>

		<div class="c-image-grid__container">
			<div v-for="item in items" class="c-image-grid__item">
				<img
					class="c-image-grid__image"
					:src="item.image"
					:alt="item.title"
				/>
			</div>
		</div>
	</section>
</template>

<script src="./ImageGrid.js"></script>
