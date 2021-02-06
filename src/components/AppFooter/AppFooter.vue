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
					<p class="c-app-footer__text">Ine De Bruycker</p>
					<a class="c-app-footer__link" href="tel:+32 472 05 27 68">
						+32 472 05 27 68
					</a>
					<a
						class="c-app-footer__link"
						href="mailto:ine.debruycker@remincare.be"
					>
						ine.debruycker@remincare.be
					</a>
				</div>

				<div
					class="c-app-footer__extra-info l-grid__col:12/12 l-grid__col:6/12@at:vp-7 l-grid__col:3/12@at:vp-9"
				>
					<address class="c-app-footer__text">
						Remincourt 72<br />
						1353 Deux-Acren
					</address>
					<p class="c-app-footer__text">BE30 13 12431 2354356</p>
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
						url=""
					/>
					<SocialButton
						class="c-app-footer__social-item"
						icon="Facebook"
						url=""
					/>
				</div>
			</div>
		</div>
	</footer>
</template>

<script src="./AppFooter.js"></script>
