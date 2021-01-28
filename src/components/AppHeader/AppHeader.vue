<template>
	<header class="c-app-header">
		<div
			class="c-app-header__container l-container:12/12 l-container--default-spacing"
			@focusin="focusIn"
		>
			<nav
				class="c-app-header__nav"
				aria-label="Primary"
				role="navigation"
			>
				<AppLogo ref="app-logo" class="c-app-header__logo" url="/" />

				<AppNav class="c-app-header__app-nav" :has-home="false" />
			</nav>

			<nuxt-link :to="switchLocalePath('nl')">Nederlands</nuxt-link>
			<nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>

			<Hamburger ref="hamburger" class="c-app-header__hamburger" />
		</div>
	</header>
</template>

<script src="./AppHeader.js"></script>
