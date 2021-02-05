<template>
	<li class="c-job-offer">
		<NuxtLink
			class="c-job-offer__link"
			:to="`${localePath('vacatures')}/${data.slug}`"
		>
			<div class="c-job-offer__content">
				<h3 class="c-job-offer__title">{{ data.title }}</h3>

				<p class="c-job-offer__text">{{ data.description }}</p>
			</div>

			<Icon class="c-job-offer__icon" svg="ArrowRightLarge" />
		</NuxtLink>
	</li>
</template>

<script src="./JobOffer.js"></script>
