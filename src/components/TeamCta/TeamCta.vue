<template>
	<article class="c-team-cta">
		<NuxtLink
			class="c-team-cta__link"
			:to="localePath({ name: 'vacatures' })"
		>
			<h3 class="c-team-cta__title">{{ $t("visie.team.cta.title") }}</h3>

			<span class="c-team-cta__button">
				{{ $t("visie.team.cta.button") }}
				<Icon class="c-team-cta__icon" svg="ArrowRightLarge" />
			</span>
		</NuxtLink>
	</article>
</template>

<script src="./TeamCta.js"></script>
