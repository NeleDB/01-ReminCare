<template>
	<div class="u-margin-bottom:20 u-margin-bottom:40@at:vp-9">
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

			<div class="l-grid l-grid--default-spacing">
				<div
					class="l-grid__col:12/12 l-grid__col:6/12@at:vp-7 l-grid__col:3/12@at:vp-12 u-padding-top:8 u-padding-top:10@at:vp-7"
				>
					<p>{{ $t("visie.header.intro") }}</p>

					<Icon
						svg="ArrowDownLarge"
						class="c-icon--color:brand-secondary c-icon--size:1.75 u-margin-top:8"
					/>
				</div>

				<BackgroundImage
					class="l-grid__col:10/12 l-grid__col:7/12@at:vp-12 l-grid__col--left-offset:2/12 u-margin-top:8"
					:image="require('@/assets/images/family.jpg')"
					:alt="$t('visie.header.image')"
					:aspectRatio="(802 / 1200) * 0.65 * 100"
				/>
			</div>
		</section>

		<!-- Wat en hoe -->
		<section
			class="l-section--slanted-both:primary u-padding-top:20 u-padding-bottom:25 u-padding-top:40@at:vp-9 u-padding-bottom:60@at:vp-9"
			style="margin-top: -60px"
		>
			<div class="l-container:12/12 l-container--default-spacing">
				<div class="l-grid l-grid--default-spacing">
					<h2
						class="l-grid__col:12/12 l-grid__col:4/12@at:vp-9 l-grid__col:3/12@at:vp-12 l-grid__col--left-offset:1/12@at:vp-12 u-color:brand:tertiary"
					>
						{{ $t("visie.usp.title") }}
					</h2>

					<UspItem
						class="l-grid__col:6/12@at:vp-7 l-grid__col:4/12@at:vp-9 l-grid__col:3/12@at:vp-12 l-grid__col--left-offset:1/12@at:vp-12"
						:title="$t('visie.usp.items.kruisbestuiving.title')"
						:intro="$t('visie.usp.items.kruisbestuiving.intro')"
						:text="$t('visie.usp.items.kruisbestuiving.text')"
					/>

					<UspItem
						class="l-grid__col:6/12@at:vp-7 l-grid__col:4/12@at:vp-9 l-grid__col:3/12@at:vp-12"
						:title="$t('visie.usp.items.kwaliteit.title')"
						:intro="$t('visie.usp.items.kwaliteit.intro')"
						:text="$t('visie.usp.items.kwaliteit.text')"
					/>

					<UspItem
						class="l-grid__col:6/12@at:vp-7 l-grid__col:4/12@at:vp-9 l-grid__col:3/12@at:vp-12 l-grid__col--left-offset:2/12@at:vp-12"
						:title="$t('visie.usp.items.vertrouwd.title')"
						:intro="$t('visie.usp.items.vertrouwd.intro')"
						:text="$t('visie.usp.items.vertrouwd.text')"
					/>

					<UspItem
						class="l-grid__col:6/12@at:vp-7 l-grid__col:4/12@at:vp-9 l-grid__col:3/12@at:vp-12"
						:title="$t('visie.usp.items.passie.title')"
						:intro="$t('visie.usp.items.passie.intro')"
						:text="$t('visie.usp.items.passie.text')"
					/>

					<UspItem
						class="l-grid__col:6/12@at:vp-7 l-grid__col:4/12@at:vp-9 l-grid__col:3/12@at:vp-12"
						:title="$t('visie.usp.items.oplossingsgericht.title')"
						:intro="$t('visie.usp.items.oplossingsgericht.intro')"
						:text="$t('visie.usp.items.oplossingsgericht.text')"
					/>
				</div>
			</div>
		</section>

		<!-- Team -->
		<section
			class="u-padding-bottom:20 u-padding-bottom:60@at:vp-9 u-margin-top:14"
		>
			<div class="l-section--slanted-both:tertiary u-padding-bottom:20">
				<div class="l-container:12/12 l-container--default-spacing">
					<div class="l-grid l-grid--default-spacing">
						<div class="l-grid__col:12/12 l-grid__col:6/12@at:vp-9">
							<h2 class="u-color:neutral:100">
								{{ $t("visie.team.title") }}
							</h2>

							<p class="u-margin-top:8 u-color:neutral:100">
								{{ $t("visie.team.intro") }}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="l-container:12/12 l-container--default-spacing">
				<div class="l-grid l-grid--default-spacing">
					<Member
						class="l-grid__col:12/12 l-grid__col:6/12@at:vp-7 l-grid__col:3/12@at:vp-12"
						:image="require('@/assets/images/visie/ine-team.jpg')"
						:name="$t('visie.team.members.ine.name')"
						:expertise="$t('visie.team.members.ine.functie')"
					/>

					<TeamCta
						class="l-grid__col:12/12 l-grid__col:6/12@at:vp-7 l-grid__col:3/12@at:vp-12"
					/>
				</div>
			</div>
		</section>

		<!-- Over Ine -->
		<section class="l-container:12/12 l-container--default-spacing">
			<header class="u-visually-hidden">
				<h1>{{ $t("visie.about.title") }}</h1>
			</header>

			<QuoteImage />

			<div class="l-grid l-grid--default-spacing">
				<div
					class="l-grid__col:12/12 l-grid__col:6/12@at:vp-9 l-grid__col--left-offset:1/12@at:vp-9"
				>
					<p class="u-margin-top:8">
						{{ $t("visie.about.alinea1") }}
					</p>

					<p class="u-margin-top:8">
						{{ $t("visie.about.alinea2") }}
					</p>

					<p class="u-margin-top:8">
						{{ $t("visie.about.alinea3") }}
					</p>

					<p class="u-margin-top:8">
						{{ $t("visie.about.alinea4") }}
					</p>

					<p class="u-margin-top:8">
						{{ $t("visie.about.alinea5") }}
					</p>

					<p class="u-margin-top:8">
						{{ $t("visie.about.alinea6") }}
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script src="./index.js"></script>
