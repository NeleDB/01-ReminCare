<template>
	<div class="c-language-switcher">
		<div class="c-language-switcher__header">
			<span class="c-language-switcher__active">{{
				currentLanguage
			}}</span>
			<Icon svg="ArrowDown" class="c-language-switcher__icon" />
		</div>

		<ul class="c-language-switcher__list">
			<li
				class="c-language-switcher__item"
				:class="currentLanguage === 'NL' && 'is-active'"
			>
				<nuxt-link
					class="c-language-switcher__link"
					:to="switchLocalePath('nl')"
					>NL</nuxt-link
				>
			</li>

			<li
				class="c-language-switcher__item"
				:class="currentLanguage === 'FR' && 'is-active'"
			>
				<nuxt-link
					class="c-language-switcher__link"
					:to="switchLocalePath('fr')"
					>FR</nuxt-link
				>
			</li>
		</ul>
	</div>
</template>

<script src="./LanguageSwitcher.js"></script>
