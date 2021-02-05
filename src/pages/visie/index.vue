<template>
	<div>
		<!-- Intro -->
		<section
			class="l-container:12/12 l-container--default-spacing u-padding-top:20 u-padding-top:30@at:vp-9"
		>
			<header class="u-visually-hidden">
				<h1>{{ $t("visie.title") }}</h1>
			</header>

			<div class="l-grid l-grid--default-spacing">
				<Quote
					:text="$t('visie.header.quote')"
					class="l-grid__col:12/12 l-grid__col:7/12@at:vp-9"
				/>
			</div>

			<div class="l-grid l-grid--default-spacing l-grid--align:right">
				<div
					class="l-grid__col:12/12 l-grid__col:6/12@at:vp-7 l-grid__col:3/12@at:vp-9 u-padding-top:8 u-padding-top:10@at:vp-7"
				>
					<p>{{ $t("visie.header.intro") }}</p>

					<Icon
						svg="ArrowDownLarge"
						class="c-icon--color:brand-secondary c-icon--size:1.75 u-margin-top:8"
					/>
				</div>

				<img
					class="l-grid__col:10/12 l-grid__col:7/12@at:vp-9 u-padding-top:4 l-grid__col--left-offset:2/12"
					src="@/assets/images/placeholder.jpg"
					:alt="$t('visie.header.image')"
				/>
			</div>
		</section>

		<!-- Wat en hoe -->
		<section
			class="l-section--slanted-both:primary u-padding-top:20 u-padding-bottom:20 u-padding-top:40@at:vp-9 u-padding-bottom:60@at:vp-9"
			style="margin-top: -60px"
		>
			<div class="l-container:12/12 l-container--default-spacing">
				<div class="l-grid l-grid--default-spacing">
					<h2
						class="l-grid__col:4/12@at:vp-9 l-grid__col--left-offset:1/12@at:vp-12 u-color:brand:tertiary"
					>
						{{ $t("visie.usp.title") }}
					</h2>

					<UspItem
						class="l-grid__col:6/12@at:vp-7 l-grid__col:3/12@at:vp-9"
						:title="$t('visie.usp.items.kruisbestuiving.title')"
						:intro="$t('visie.usp.items.kruisbestuiving.intro')"
						:text="$t('visie.usp.items.kruisbestuiving.text')"
					/>

					<UspItem
						class="l-grid__col:6/12@at:vp-7 l-grid__col:3/12@at:vp-9"
						:title="$t('visie.usp.items.wetenschappelijk.title')"
						:intro="$t('visie.usp.items.wetenschappelijk.intro')"
						:text="$t('visie.usp.items.wetenschappelijk.text')"
					/>

					<UspItem
						class="l-grid__col:6/12@at:vp-7 l-grid__col:3/12@at:vp-9 l-grid__col--left-offset:1/12@at:vp-9 l-grid__col--left-offset:2/12@at:vp-12"
						:title="$t('visie.usp.items.vertrouwd.title')"
						:intro="$t('visie.usp.items.vertrouwd.intro')"
						:text="$t('visie.usp.items.vertrouwd.text')"
					/>

					<UspItem
						class="l-grid__col:6/12@at:vp-7 l-grid__col:3/12@at:vp-9"
						:title="$t('visie.usp.items.passie.title')"
						:intro="$t('visie.usp.items.passie.intro')"
						:text="$t('visie.usp.items.passie.text')"
					/>

					<UspItem
						class="l-grid__col:6/12@at:vp-7 l-grid__col:3/12@at:vp-9"
						:title="$t('visie.usp.items.oplossingsgericht.title')"
						:intro="$t('visie.usp.items.oplossingsgericht.intro')"
						:text="$t('visie.usp.items.oplossingsgericht.text')"
					/>
				</div>
			</div>
		</section>

		<section
			class="u-padding-bottom:20 u-padding-bottom:60@at:vp-9 u-margin-top:20"
		>
			<div
				class="l-section--slanted-both:tertiary u-padding-bottom:20 u-padding-bottom:60@at:vp-9"
			>
				<div class="l-container:12/12 l-container--default-spacing">
					<h2 class="u-color:neutral:100">Team</h2>
				</div>
			</div>
		</section>
	</div>
</template>

<script src="./index.js"></script>
