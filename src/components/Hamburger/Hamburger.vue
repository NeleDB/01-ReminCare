<template>
	<button
		class="c-hamburger"
		:class="isMobileNavOpen && 'is-closed'"
		@click.prevent="click"
		aria-label="Open the menu"
		:aria-expanded="isMobileNavOpen"
		aria-controls="app-mobile-nav"
		tab-index="-1"
	>
		<span class="c-hamburger__container" aria-hidden="true">
			<span class="c-hamburger__top-bar"></span>

			<span class="c-hamburger__middle-bar"></span>

			<span class="c-hamburger__bottom-bar"></span>
		</span>
	</button>
</template>

<script src="./Hamburger.js"></script>
