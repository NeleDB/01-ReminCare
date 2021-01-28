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
	</nav>
</template>

<script src="./AppMobileNav.js"></script>
