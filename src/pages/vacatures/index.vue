<template>
	<div>
		<section class="u-margin-bottom:20 u-margin-bottom:25@at:vp-9">
			<div>
				<TitleHeader
					:title="$t('vacatures.header.title')"
					:text="$t('vacatures.header.intro')"
					:button="$t('vacatures.header.cta')"
					:url="`#${$t('vacatures.link')}`"
				/>

				<!-- zwangere vrouw, baby, kleuter en ouders -->
				<ImageGrid
					:items="[
						{
							image: require('@/assets/images/zwanger.jpg'),
							title: 'placeholder',
						},
						{
							image: require('@/assets/images/placeholder3.jpg'),
							title: 'placeholder2',
						},
						{
							image: require('@/assets/images/vacatures/psych.jpg'),
							title: 'placeholder',
						},
						{
							image: require('@/assets/images/placeholder4.jpg'),
							title: 'placeholder2',
						},
					]"
				/>
			</div>
		</section>

		<section
			class="l-container:12/12 l-container:8/12@at:vp-9 l-container--default-spacing u-margin-bottom:20 u-margin-bottom:25@at:vp-9"
			:id="$t('vacatures.link')"
		>
			<h2 class="u-color:brand:tertiary">
				{{ $t("vacatures.title") }}
			</h2>

			<JobOfferList :data="vacatures" class="u-margin-top:8" />
		</section>

		<section
			class="l-container:12/12 l-container:10/12@at:vp-9 l-container--default-spacing u-margin-bottom:20 u-margin-bottom:25@at:vp-9"
		>
			<JobOfferCta
				:title="$t('vacatures.cta.title')"
				:text="$t('vacatures.cta.text')"
				:button="$t('vacatures.cta.button')"
				:subject="$t('vacatures.cta.subject')"
			/>
		</section>
	</div>
</template>

<script src="./index.js"></script>
