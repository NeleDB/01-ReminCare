<template>
	<div class="p-default" ref="root" :tabIndex="resetTabIndex && -1">
		<SkipLink text="Skip to content" url="main" />

		<AppHeader />

		<AppMobileNav />

		<main id="main" class="p-default__main" role="main">
			<Nuxt />
		</main>

		<AppFooter />
	</div>
</template>

<script src="./Default.js"></script>
