<template>
	<div class="c-contact-info">
		<div class="c-contact-info__item">
			<span class="c-contact-info__title">{{
				$t("contact.info.adres")
			}}</span>

			<address class="c-contact-info__text">
				Remincourt 72<br />
				1353 Deux-Acren
			</address>
			<p class="c-contact-info__text">BE30 13 12431 2354356</p>
		</div>

		<div class="c-contact-info__item">
			<span class="c-contact-info__title">{{
				$t("contact.info.contactinfo")
			}}</span>

			<p class="c-contact-info__text">Ine De Bruycker</p>
			<a class="c-contact-info__link" href="tel:+32 472 05 27 68">
				+32 472 05 27 68
			</a>
			<a
				class="c-contact-info__link"
				href="mailto:ine.debruycker@remincare.be"
			>
				ine.debruycker@remincare.be
			</a>
		</div>

		<Button
			class="c-contact-info__button"
			url="mailto:ine.debruycker@remincare.be"
			:text="$t('contact.info.button')"
		/>
	</div>
</template>

<script src="./ContactInfo.js"></script>
