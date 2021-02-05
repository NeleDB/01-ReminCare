<template>
	<article class="c-member">
		<div
			class="c-member__image-wrapper"
			:style="`background-image: url('${image}')`"
		>
			<img :src="image" :alt="name" class="c-member__image" />
		</div>

		<span class="c-member__expertise">{{ expertise }}</span>

		<h3 class="c-member__name">{{ name }}</h3>
	</article>
</template>

<script src="./Member.js"></script>
