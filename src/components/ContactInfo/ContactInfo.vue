<template>
	<div class="c-contact-info">
		<div class="c-contact-info__item">
			<span class="c-contact-info__title">{{
				$t("contact.info.adres")
			}}</span>

			<address class="c-contact-info__text">
				{{ $t("general.adres.line1") }}<br />
				{{ $t("general.adres.line2") }}
			</address>
		</div>

		<div class="c-contact-info__item">
			<span class="c-contact-info__title">{{
				$t("contact.info.contactinfo")
			}}</span>

			<p class="c-contact-info__text">{{ $t("general.naam") }}</p>
			<a class="c-contact-info__link" :href="`tel:${$t('general.tel')}`">
				{{ $t("general.tel") }}
			</a>
			<a
				class="c-contact-info__link"
				:href="`mailto:${$t('general.email')}`"
			>
				{{ $t("general.email") }}
			</a>
		</div>

		<Button
			class="c-contact-info__button"
			:url="`mailto:${$t('general.email')}`"
			:text="$t('contact.info.button')"
			target="_blank"
		/>
	</div>
</template>

<script src="./ContactInfo.js"></script>
