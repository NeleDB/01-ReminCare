<template>
	<article class="c-team-cta">
		<a class="c-team-cta__link" :href="`mailto:${$t('general.email')}`">
			<h3 class="c-team-cta__title">{{ $t("visie.team.cta.title") }}</h3>

			<span class="c-team-cta__button">
				{{ $t("visie.team.cta.button") }}
				<Icon class="c-team-cta__icon" svg="ArrowRightLarge" />
			</span>
		</a>
	</article>
</template>

<script src="./TeamCta.js"></script>
