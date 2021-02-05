<template>
	<section class="c-title-header">
		<div
			class="l-container:12/12 l-container:6/12@at:vp-9 l-container--default-spacing"
		>
			<h1 class="c-title-header__title">{{ title }}</h1>

			<p class="c-title-header__intro">{{ text }}</p>

			<Button
				class="c-title-header__button"
				v-if="button && url"
				:text="button"
				:url="url"
			/>
		</div>
	</section>
</template>

<script src="./TitleHeader.js"></script>
