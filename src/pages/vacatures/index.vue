<template>
	<div>
		<section class="u-margin-bottom:20 u-margin-bottom:25@at:vp-9">
			<div>
				<TitleHeader
					:title="$t('vacatures.header.title')"
					:text="$t('vacatures.header.intro')"
					:button="$t('vacatures.header.cta')"
					url=""
				/>

				<ImageGrid
					:items="[
						{
							image: require('@/assets/images/placeholder.jpg'),
							title: 'placeholder',
						},
						{
							image: require('@/assets/images/placeholder2.jpg'),
							title: 'placeholder2',
						},
						{
							image: require('@/assets/images/placeholder.jpg'),
							title: 'placeholder',
						},
						{
							image: require('@/assets/images/placeholder2.jpg'),
							title: 'placeholder2',
						},
					]"
				/>
			</div>
		</section>

		<section
			class="l-container:12/12 l-container:8/12@at:vp-9 l-container--default-spacing"
		>
			<h2 class="u-color:brand:tertiary">
				{{ $t("vacatures.header.title") }}
			</h2>

			<JobOfferList :data="vacatures" class="u-margin-top:8" />
		</section>
	</div>
</template>

<script src="./index.js"></script>
