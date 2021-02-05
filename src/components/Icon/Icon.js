import ArrowDown from "@/assets/icons/ArrowDown.svg?inline";
import ArrowDownLarge from "@/assets/icons/ArrowDownLarge.svg?inline";
import ArrowRightLarge from "@/assets/icons/ArrowRightLarge.svg?inline";
import Facebook from "@/assets/icons/Facebook.svg?inline";
import Instagram from "@/assets/icons/Instagram.svg?inline";

export default {
	props: {
		svg: {
			type: String,
			required: true,
		},
	},
	components: {
		ArrowDown,
		ArrowDownLarge,
		ArrowRightLarge,
		Facebook,
		Instagram,
	},
};
