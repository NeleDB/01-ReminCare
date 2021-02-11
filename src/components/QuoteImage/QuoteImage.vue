<template>
	<div class="c-quote-image">
		<div class="c-quote-image__container l-grid l-grid--default-spacing">
			<Quote
				class="c-quote-image__quote l-grid__col:12/12 l-grid__col:6/12@at:vp-9 l-grid__col--left-offset:1/12@at:vp-9"
				:text="$t('visie.about.quote')"
			/>

			<div
				class="c-quote-image__image-container l-grid__col:12/12 l-grid__col:5/12@at:vp-9"
			>
				<img
					class="c-quote-image__image"
					src="@/assets/images/visie/ine-visie.jpg"
					:alt="$t('visie.about.image')"
				/>
			</div>
		</div>
	</div>
</template>

<script src="./QuoteImage.js"></script>
