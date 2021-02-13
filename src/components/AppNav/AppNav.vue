<template>
	<ul class="c-app-nav">
		<li v-if="hasHome" class="c-app-nav__item">
			<NuxtLink class="c-app-nav__link" exact to="/">{{
				$t("navigatie.home")
			}}</NuxtLink>
		</li>

		<li class="c-app-nav__item">
			<NuxtLink
				class="c-app-nav__link"
				:to="localePath({ name: 'visie' })"
			>
				{{ $t("navigatie.visie") }}
			</NuxtLink>
		</li>

		<li class="c-app-nav__item">
			<NuxtLink
				class="c-app-nav__link"
				:to="localePath({ name: 'vacatures' })"
				>{{ $t("navigatie.vacatures") }}
				<Indicator class="c-app-nav__indicator" number="7"
			/></NuxtLink>
		</li>

		<li class="c-app-nav__item">
			<NuxtLink
				class="c-app-nav__link"
				:to="localePath({ name: 'renovatie' })"
			>
				{{ $t("navigatie.renovatie") }}
			</NuxtLink>
		</li>

		<li class="c-app-nav__item">
			<NuxtLink
				class="c-app-nav__link"
				:to="localePath({ name: 'contact' })"
				>{{ $t("navigatie.contact") }}</NuxtLink
			>
		</li>
	</ul>
</template>

<script src="./AppNav.js"></script>
