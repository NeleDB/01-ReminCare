<template>
	<section class="u-margin-top:20 u-margin-bottom:20">
		<div
			class="l-container:12/12 l-container:6/12@at:vp-9 l-container--default-spacing s-md"
		>
			<h1>{{ $t("renovatie.title") }}</h1>

			<p>{{ $t("renovatie.intro") }}</p>
		</div>

		<div
			class="l-container:12/12 l-container:10/12@at:vp-9 l-container--default-spacing u-margin-top:8 u-margin-top:14@at:vp-9 s-md"
		>
			<img
				src="@/assets/images/renovatie/ine-jeroen.jpg"
				:alt="$t('renovatie.image-ine-jeroen')"
			/>
		</div>

		<div
			class="l-container:12/12 l-container:6/12@at:vp-9 l-container--default-spacing s-md u-margin-top:8 u-margin-top:14@at:vp-9"
		>
			<p>{{ $t("renovatie.alinea1") }}</p>
			<p>{{ $t("renovatie.alinea2") }}</p>
		</div>

		<div
			class="l-container:12/12 l-container:10/12@at:vp-9 l-container--default-spacing u-margin-top:8 u-margin-top:14@at:vp-9 s-md"
		>
			<img
				src="@/assets/images/renovatie/remincare.jpg"
				:alt="$t('renovatie.image-remincare')"
			/>
		</div>

		<div
			class="l-container:12/12 l-container:6/12@at:vp-9 l-container--default-spacing s-md u-margin-top:8 u-margin-top:14@at:vp-9"
		>
			<p>{{ $t("renovatie.alinea3") }}</p>
			<p>{{ $t("renovatie.alinea4") }}</p>

			<Button
				class="u-margin-top:8"
				:url="$t('general.instagram')"
				:text="$t('renovatie.button')"
				target="_blank"
			/>
		</div>
	</section>
</template>

<script src="./index.js"></script>
