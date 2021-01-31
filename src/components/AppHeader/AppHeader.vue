<template>
	<header class="c-app-header">
		<div
			class="c-app-header__container l-container:12/12 l-container--default-spacing"
			@focusin="focusIn"
		>
			<div class="c-app-header__nav-container">
				<AppLogo ref="app-logo" class="c-app-header__logo" url="/" />

				<LanguageSwitcher class="c-app-header__language" />
			</div>

			<nav
				class="c-app-header__nav"
				aria-label="Primary"
				role="navigation"
			>
				<AppNav class="c-app-header__app-nav" :has-home="false" />
			</nav>

			<Hamburger ref="hamburger" class="c-app-header__hamburger" />
		</div>
	</header>
</template>

<script src="./AppHeader.js"></script>
