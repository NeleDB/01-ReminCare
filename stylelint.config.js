module.exports = {
	extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
	plugins: [
		"stylelint-prettier",
		"stylelint-scss",
		"stylelint-high-performance-animation",
		"stylelint-order",
	],
	rules: {
		indentation: "tab",
		"max-line-length": [
			80,
			{
				ignore: ["non-comments"],
				ignorePattern: ["/https?://[0-9,a-z]*.*/"],
			},
		],
		"max-nesting-depth": [
			5,
			{
				ignore: ["blockless-at-rules", "pseudo-classes"],
			},
		],
		"no-empty-first-line": true,
		"no-unknown-animations": true,
		"rule-empty-line-before": [
			"always",
			{
				ignore: ["after-comment", "first-nested"],
			},
		],
		"shorthand-property-no-redundant-values": true,
		"string-quotes": "double",
		"unicode-bom": "never",
		"no-descending-specificity": null,
		"no-duplicate-selectors": null,
		"at-rule-no-unknown": null,
		"at-rule-no-vendor-prefix": true,
		"at-rule-semicolon-space-before": "never",
		"at-rule-empty-line-before": [
			"always",
			{
				except: ["blockless-after-blockless", "first-nested"],
				ignore: ["after-comment", "first-nested"],
				ignoreAtRules: ["else", "use"],
			},
		],
		"block-closing-brace-space-after": "always-single-line",
		"block-opening-brace-newline-before": "always-single-line",
		"block-closing-brace-newline-after": [
			"always",
			{
				ignoreAtRules: ["if", "else"],
			},
		],
		"declaration-block-semicolon-newline-after": "always",
		"declaration-no-important": true,
		"font-family-name-quotes": "always-where-recommended",
		"font-weight-notation": "numeric",
		"function-comma-newline-before": "never-multi-line",
		"function-url-no-scheme-relative": true,
		"media-feature-name-no-vendor-prefix": true,
		"media-query-list-comma-newline-before": "never-multi-line",
		"number-max-precision": 2,
		"property-no-vendor-prefix": true,
		"selector-attribute-quotes": "always",
		"selector-list-comma-newline-before": "never-multi-line",
		"selector-list-comma-space-after": "always-single-line",
		"selector-max-attribute": 2,
		"selector-max-class": 3,
		"selector-max-combinators": 3,
		"selector-max-compound-selectors": 5,
		"selector-max-id": 1,
		"selector-max-pseudo-class": 2,
		"selector-max-specificity": "0,5,0",
		"selector-max-type": 2,
		"selector-max-universal": 1,
		"selector-no-qualifying-type": [
			true,
			{
				ignore: ["attribute"],
			},
		],
		"selector-no-vendor-prefix": [
			true,
			{
				ignoreSelectors: [
					"::-webkit-input-placeholder",
					"/-moz-.*/",
					"/-ms-.*/",
				],
			},
		],
		"value-list-comma-newline-before": "never-multi-line",
		"value-list-comma-space-before": "never-single-line",
		"value-no-vendor-prefix": true,
		"color-hex-case": "upper",
		"color-hex-length": "long",
		"comment-empty-line-before": [
			"always",
			{
				except: ["first-nested"],
				ignore: ["after-comment", "stylelint-commands"],
			},
		],
		"custom-property-empty-line-before": [
			"always",
			{
				except: ["after-custom-property", "first-nested"],
			},
		],
		"scss/at-rule-no-unknown": true,
		"scss/double-slash-comment-whitespace-inside": "always",
		"scss/declaration-nested-properties": "never",
		"scss/declaration-nested-properties-no-divided-groups": true,
		"scss/at-each-key-value-single-line": true,
		"scss/at-else-closing-brace-newline-after": "always-last-in-chain",
		"scss/at-else-closing-brace-space-after": "always-intermediate",
		"scss/at-else-empty-line-before": "never",
		"scss/at-else-if-parentheses-space-before": "always",
		"scss/at-extend-no-missing-placeholder": true,
		"scss/at-function-parentheses-space-before": "never",
		"scss/no-duplicate-mixins": true,
		"scss/at-if-closing-brace-newline-after": "always-last-in-chain",
		"scss/at-if-closing-brace-space-after": "always-intermediate",
		"scss/at-if-no-null": true,
		"scss/at-mixin-argumentless-call-parentheses": "always",
		"scss/at-mixin-parentheses-space-before": "never",
		"scss/selector-no-union-class-name": true,
		"scss/dollar-variable-colon-space-after": "always",
		"scss/dollar-variable-colon-space-before": "never",
		"scss/dollar-variable-no-missing-interpolation": true,
		"scss/dollar-variable-pattern": /^[-a-z0-9_]+$/,
		"plugin/no-low-performance-animation-properties": [
			true,
			{
				ignore: "paint-properties",
			},
		],
		"declaration-empty-line-before": null,
		"order/order": [
			"custom-properties",
			"dollar-variables",
			"declarations",
			"rules",
		],
		"order/properties-order": [
			{
				groupName: "content",
				emptyLineBefore: "always",
				noEmptyLineBetween: true,
				order: "strict",
				properties: ["content"],
			},
			{
				groupName: "position",
				emptyLineBefore: "always",
				noEmptyLineBetween: true,
				order: "strict",
				properties: [
					"position",
					"top",
					"right",
					"bottom",
					"left",
					"z-index",
				],
			},
			{
				groupName: "box-modal",
				emptyLineBefore: "always",
				noEmptyLineBetween: true,
				order: "strict",
				properties: [
					"display",
					"grid",
					"grid-area",
					"grid-auto-columns",
					"grid-auto-flow",
					"grid-auto-rows",
					"grid-column",
					"grid-column-start",
					"grid-column-end",
					"grid-row",
					"grid-row-start",
					"grid-row-end",
					"grid-template",
					"grid-template-areas",
					"grid-template-columns",
					"grid-template-rows",
					"flex-wrap",
					"flex-direction",
					"justify-content",
					"align-items",
					"align-content",
					"align-self",
					"flex",
					"flex-basis",
					"flex-grow",
					"flex-shrink",
					"flex-flow",
					"order",
					"float",
					"clear",
					"object-fit",
					"object-position",
					"vertical-align",
					"width",
					"min-width",
					"max-width",
					"height",
					"min-height",
					"max-height",
					"overflow",
					"overflow-x",
					"overflow-y",
					"margin",
					"margin-top",
					"margin-right",
					"margin-bottom",
					"margin-left",
					"padding",
					"padding-top",
					"padding-right",
					"padding-bottom",
					"padding-left",
				],
			},
			{
				groupName: "typography",
				emptyLineBefore: "always",
				noEmptyLineBetween: true,
				order: "flexible",
				properties: [
					"font",
					"font-family",
					"font-variant",
					"font-weight",
					"font-style",
					"font-size",
					"line-height",
					"letter-spacing",
					"text-align",
					"text-transform",
					"text-decoration",
					"text-indent",
					"text-overflow",
					"text-shadow",
					"text-wrap",
					"hyphens",
					"white-space",
					"line-break",
					"line-clamp",
					"word-break",
					"word-spacing",
					"word-wrap",
				],
			},
			{
				groupName: "visual",
				emptyLineBefore: "always",
				noEmptyLineBetween: true,
				order: "flexible",
				properties: [
					"background",
					"background-image",
					"background-repeat",
					"background-position",
					"background-origin",
					"background-size",
					"background-clip",
					"border-radius",
					"border-radius-top-left",
					"border-radius-top-right",
					"border-radius-bottom-right",
					"border-radius-bottom-left",
					"border",
					"border-width",
					"border-style",
					"border-color",
					"border-top",
					"border-top-width",
					"border-top-style",
					"border-top-color",
					"border-right",
					"border-right-width",
					"border-right-style",
					"border-right-color",
					"border-bottom",
					"border-bottom-width",
					"border-bottom-style",
					"border-bottom-color",
					"border-left",
					"border-left-width",
					"border-left-style",
					"border-left-color",
					"background-color",
					"color",
					"box-shadow",
					"opacity",
					"appearance",
					"outline",
					"list-style",
					"list-style-type",
					"list-style-image",
					"list-style-position",
					"filter",
				],
			},
			{
				groupName: "svg",
				emptyLineBefore: "always",
				noEmptyLineBetween: true,
				order: "flexible",
				properties: [
					"fill",
					"stroke-width",
					"stroke-align",
					"stroke-alignment",
					"stroke-break",
					"stroke-color",
					"stroke-dash-corner",
					"stroke-dashcorner",
					"stroke-dash-justify",
					"stroke-dashadjust",
					"stroke-dasharray",
					"stroke-dashoffset",
					"stroke-image",
					"stroke-linecap",
					"stroke-linejoin",
					"stroke-miterlimit",
					"stroke-opacity",
					"stroke-origin",
					"stroke-position",
					"stroke-repeat",
					"stroke-size",
					"stroke-width",
				],
			},
			{
				groupName: "animation",
				emptyLineBefore: "always",
				noEmptyLineBetween: true,
				order: "flexible",
				properties: [
					"perspective",
					"perspective-origin",
					"transform",
					"transform-origin",
					"transform-style",
					"transition",
					"transition-property",
					"transition-duration",
					"transition-timing-function",
					"transition-delay",
					"animation",
					"animation-name",
					"animation-duration",
					"animation-timing-function",
					"animation-delay",
					"animation-iteration-count",
					"animation-direction",
					"animation-fill-mode",
					"animation-play-state",
					"will-change",
				],
			},
			{
				groupName: "misc",
				emptyLineBefore: "always",
				noEmptyLineBetween: true,
				order: "flexible",
				properties: [
					"speak",
					"cursor",
					"backface-visibility",
					"pointer-events",
					"visibility",
					"resize",
					"user-select",
				],
			},
		],
	},
};
