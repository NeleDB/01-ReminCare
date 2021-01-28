<template>
	<ButtonRoot :url="url" :type="type" :target="target" @click="click">
		<Icon
			v-if="iconBefore"
			class="c-button__icon-before"
			:svg="iconBefore"
		/>

		<span class="c-button__text">
			{{ text }}
		</span>

		<Icon v-if="iconAfter" class="c-button__icon-after" :svg="iconAfter" />
	</ButtonRoot>
</template>

<script src="./Button.js"></script>
