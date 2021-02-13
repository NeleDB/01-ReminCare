<template>
	<nav
		id="app-mobile-nav"
		class="c-app-mobile-nav"
		:class="isMobileNavOpen && 'is-open'"
		:aria-hidden="!isMobileNavOpen"
		aria-label="Primary mobile"
		role="navigation"
		@focusout="focusOut"
	>
		<AppNav />

		<div class="c-app-mobile-nav__social">
			<SocialButton
				class="c-app-mobile-nav__social-item"
				icon="Instagram"
				:url="$t('general.instagram')"
			/>
			<SocialButton
				class="c-app-mobile-nav__social-item"
				icon="Facebook"
				:url="$t('general.facebook')"
			/>
		</div>
	</nav>
</template>

<script src="./AppMobileNav.js"></script>
