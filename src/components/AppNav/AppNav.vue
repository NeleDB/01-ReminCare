<template>
	<ul class="c-app-nav">
		<li v-if="hasHome" class="c-app-nav__item">
			<NuxtLink class="c-app-nav__link" exact to="/">{{
				$t("home")
			}}</NuxtLink>
		</li>

		<li class="c-app-nav__item">
			<NuxtLink class="c-app-nav__link" :to="localePath('visie')">
				{{ $t("visie") }}
			</NuxtLink>
		</li>

		<li class="c-app-nav__item">
			<NuxtLink class="c-app-nav__link" :to="localePath('/vacatures')">{{
				$t("vacatures")
			}}</NuxtLink>
		</li>

		<li class="c-app-nav__item">
			<NuxtLink class="c-app-nav__link" to="/renovatie">
				{{ $t("renovatie") }}
			</NuxtLink>
		</li>

		<li class="c-app-nav__item">
			<NuxtLink class="c-app-nav__link" to="/contact">{{
				$t("contact")
			}}</NuxtLink>
		</li>
	</ul>
</template>

<script src="./AppNav.js"></script>
