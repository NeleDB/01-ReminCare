<template>
	<div class="c-map">
		<div
			class="c-map__image l-container:12/12 l-container--default-spacing"
		>
			<Button
				class="c-map__button u-margin-top:8"
				:text="$t('contact.button.text')"
				url="https://goo.gl/maps/hggHs3NeaoY4kUVZ6"
				iconAfter="ArrowRightLarge"
				target="_blank"
			/>

			<ContactInfo class="c-map__info" />
		</div>
	</div>
</template>

<script src="./Map.js"></script>
