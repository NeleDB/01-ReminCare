<template>
	<ul class="c-job-offer-list">
		<JobOffer
			class="c-job-offer-list__item"
			v-bind:class="{ 'c-job-offer--light': isLight }"
			:data="vacature"
			v-for="vacature in data"
			:key="vacature.slug"
		/>
	</ul>
</template>

<script src="./JobOfferList.js"></script>
