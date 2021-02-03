<template>
	<section>
		<div>
			<h1>Vacatures</h1>

			<ul v-if="hasVacatures">
				<li v-for="vacature in vacatures" :key="vacature.slug">
					<NuxtLink :to="vacature.path">{{
						vacature.title
					}}</NuxtLink>
				</li>
			</ul>

			<p v-else>Nog geen vacatures</p>
		</div>
	</section>
</template>

<script src="./index.js"></script>
