<template>
	<div>
		<TitleHeader :title="vacature.title" :text="vacature.intro" />

		<NuxtImage
			class="l-container:12/12 l-container:10/12@at:vp-9 l-container--default-spacing u-margin-bottom:20 u-margin-bottom:25@at:vp-9"
			:src="vacature.image"
			:alt="vacature.title"
			style="max-height: 500px"
		/>

		<div
			class="l-container:12/12 l-container:6/12@at:vp-9 l-container--default-spacing u-margin-bottom:20 u-margin-bottom:25@at:vp-9"
		>
			<nuxt-content class="s-md" :document="vacature" />
		</div>
	</div>
</template>

<script src="./index.js"></script>
