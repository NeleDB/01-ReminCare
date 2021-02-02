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

			<div class="c-app-header__social">
				<!-- TODO: add link -->
				<SocialButton
					class="c-app-header__social-item"
					icon="Instagram"
					url=""
				/>
				<SocialButton
					class="c-app-header__social-item"
					icon="Facebook"
					url=""
				/>
			</div>

			<div class="c-app-header__hamburger">
				<Hamburger ref="hamburger" />
			</div>
		</div>
	</header>
</template>

<script src="./AppHeader.js"></script>
