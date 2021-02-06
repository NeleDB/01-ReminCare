<template>
	<section class="u-margin-top:20 u-margin-bottom:20">
		<div
			class="l-container:12/12 l-container:6/12@at:vp-9 l-container--default-spacing s-md"
		>
			<h1>{{ renovatie.title }}</h1>

			<p>{{ renovatie.intro }}</p>
		</div>

		<NuxtImage
			class="l-container:12/12 l-container:10/12@at:vp-9 l-container--default-spacing u-margin-top:10 u-margin-bottom:10"
			:src="renovatie.image"
			:alt="renovatie.title"
			style="max-height: 500px"
		/>

		<div class="l-container:12/12 l-container--default-spacing">
			<nuxt-content class="s-md" :document="renovatie" />
		</div>
	</section>
</template>

<script src="./index.js"></script>
