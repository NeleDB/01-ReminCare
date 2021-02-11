<template>
	<div class="u-margin-top:20@at:vp-9 u-margin-bottom:20">
		<section class="l-section--hero">
			<div class="l-container:12/12 l-container:10/12@at:vp-9">
				<Hero
					:title="$t('home.hero.title')"
					:text="$t('home.hero.text')"
					:label="$t('home.hero.label')"
					:image="require('@/assets/images/family.jpg')"
					:button="$t('home.hero.button')"
					:url="localePath({ name: 'visie' })"
				/>
			</div>
		</section>

		<section
			class="u-background-color:brand:quarternary u-padding-top:20 u-padding-bottom:20"
		>
			<div
				class="l-container:12/12 l-container:6/12@at:vp-9 l-container--default-spacing u-margin-bottom:10"
			>
				<h2 class="u-color:brand:tertiary u-text-align:center">
					{{ $t("home.vacatures.title") }}
				</h2>
				<p class="u-text-align:center u-margin-top:3">
					{{ $t("home.vacatures.text") }}
				</p>
			</div>

			<div
				class="l-container:12/12 l-container:8/12@at:vp-9 l-container--default-spacing"
			>
				<div
					class="l-grid l-grid--default-spacing l-grid--align:center"
				>
					<JobOfferList
						isLight
						:data="vacatures"
						class="l-grid__col:12/12"
					/>

					<Button
						:text="$t('home.vacatures.button')"
						:url="localePath({ name: 'vacatures' })"
						class="u-margin-top:8"
					/>
				</div>
			</div>
		</section>

		<section
			class="l-container:12/12 l-container--default-spacing u-margin-top:20"
		>
			<ImageCta
				:title="$t('home.remincare.title')"
				:text="$t('home.remincare.text')"
				:image="require('@/assets/images/remincare.jpg')"
				:alt="$t('home.remincare.image')"
				:button="$t('home.remincare.button')"
				:url="localePath({ name: 'visie' })"
			/>
		</section>
	</div>
</template>

<script src="./index.js"></script>
