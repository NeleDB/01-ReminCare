<template>
	<footer class="c-app-footer" role="contentinfo">
		<div class="l-container:12/12 l-container--default-spacing">
			<div class="l-grid l-grid--default-spacing l-grid--align:top">
				<AppLogo
					ref="app-logo"
					class="c-app-footer__logo l-grid__col:12/12 l-grid__col:3/12@at:vp-9"
					url="/"
				/>

				<div
					class="c-app-footer__contact-info l-grid__col:12/12 l-grid__col:6/12@at:vp-7 l-grid__col:3/12@at:vp-9"
				>
					<p class="c-app-footer__text">{{ $t("general.naam") }}</p>
					<a
						class="c-app-footer__link"
						:href="`tel:${$t('general.tel')}`"
					>
						{{ $t("general.tel") }}
					</a>
					<a
						class="c-app-footer__link"
						:href="`mailto:${$t('general.email')}`"
					>
						{{ $t("general.email") }}
					</a>
				</div>

				<div
					class="c-app-footer__extra-info l-grid__col:12/12 l-grid__col:6/12@at:vp-7 l-grid__col:3/12@at:vp-9"
				>
					<address class="c-app-footer__text">
						{{ $t("general.adres.line1") }}<br />
						{{ $t("general.adres.line2") }}
					</address>
					<p class="c-app-footer__text">
						{{ $t("general.btw") }}
					</p>
				</div>

				<div
					class="c-app-footer__socials l-grid__col:12/12 l-grid__col:3/12@at:vp-9 l-grid--align:top"
					style="align-items: center"
				>
					<span class="c-app-footer__highlight">{{
						$t("footer.volg-ons")
					}}</span>

					<SocialButton
						class="c-app-footer__social-item"
						icon="Instagram"
						:url="$t('general.instagram')"
					/>
					<SocialButton
						class="c-app-footer__social-item"
						icon="Facebook"
						:url="$t('general.facebook')"
					/>
				</div>
			</div>
		</div>
	</footer>
</template>

<script src="./AppFooter.js"></script>
