<template>
	<article class="c-job-offer-cta">
		<div class="l-grid l-grid--default-spacing">
			<div
				class="l-grid__col:6/12@at:vp-9 l-grid__col--left-offset:1/12@at:vp-9"
			>
				<h2 class="c-job-offer-cta__title">{{ title }}</h2>

				<p class="c-job-offer-cta__text">{{ text }}</p>

				<Button
					class="c-job-offer-cta__button"
					:url="`mailto:ine_debruycker@hotmail.com?subject=${subject}`"
					:text="button"
				/>
			</div>
		</div>
	</article>
</template>

<script src="./JobOfferCta.js"></script>
