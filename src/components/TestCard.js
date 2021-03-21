import React from 'react';
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
import atomize from "@quarkly/atomize";
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Image",
			"background": "center / 100% no-repeat url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2069.png?v=2021-03-21T00:17:18.655Z)",
			"lg-background": "center / 100% no-repeat url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2069.png?v=2021-03-21T00:17:18.655Z) --color-background",
			"md-background": "center / 100% no-repeat url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2069.png?v=2021-03-21T00:17:18.655Z) --color-background",
			"sm-background": "center / 100% no-repeat url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2069.png?v=2021-03-21T00:17:18.655Z) --color-background",
			"height": "350px",
			"max-height": "350px"
		}
	},
	"card-wrapper": {
		"kind": "Box",
		"props": {
			"width": "fit-content",
			"min-width": "350px"
		}
	},
	"wrapper": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"flex-wrap": "wrap",
			"justify-content": "space-between"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "--black",
			"font": "500 20px Roboto, sans-serif",
			"margin": "0px 0px 0px 0px"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Texts",
			"sm-display": "flex",
			"sm-flex-direction": "column",
			"sm-justify-content": "start",
			"sm-align-items": "flex-start",
			"lg-background": "rgba(0, 0, 0, 0)"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"sm-font": "normal 13px sans-serif",
			"sm-text-align": "left",
			"quarkly-title": "Name podcast",
			"sm-margin": "0px 0px 5px 0px",
			"sm-max-height": "30px",
			"sm-min-height": "15px",
			"md-min-height": "10px",
			"lg-min-height": "14px",
			"lg-font": "18px sans-serif",
			"min-height": "18px",
			"font": "--t2",
			"color": "--black"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"sm-height": "15px",
			"sm-font": "normal 12px sans-serif",
			"sm-text-align": "left",
			"quarkly-title": "Name's podcaster",
			"sm-margin": "0px 0px 0 0px",
			"sm-border-color": "#4d4d4d",
			"sm-color": "--fontGray",
			"md-font": "14px sans-serif",
			"md-min-height": "10px",
			"lg-min-height": "14px",
			"min-height": "18ox",
			"font": "20px sans-serif"
		}
	}
};

const TestCard = ({
	title,
	description,
	imgURL,
	time,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <Box {...rest}>
		<Box {...override("card-wrapper")}>
			<Box {...override("box")}></Box>
			<Box {...override("box2")}>
				<Box {...override("text1")}>
					{`${title}`}
				</Box>
				<Box {...override("text2")}>
					{`${description}`}
				</Box>
				<Box>
					{`${time}`}
				</Box>
			</Box>
		</Box>
	</Box>;
};

export default atomize(TestCard)({
	name: "TestCard",
	effects: {
		hover: ":hover"
	},
	overrides,
	normalize: true,
	mixins: true,
	propInfo: {
		title: {
			control: "input"
		},
		description: {
			control: "input"
		},
		imgURL: {
			control: "input"
		},
		time: {
			control: "input"
		}
	}
}); // "box1": {
// 	"kind": "Box",
// 	"props": {
// 		"quarkly-title": "Filter",
// 		"sm-width": "162px",
// 		"sm-height": "162px",
// 		"sm-border-radius": "25%",
// 		"sm-margin": "0px 0px 10px 0px",
// 		"md-height": "220px",
// 		"md-border-radius": "25%",
// 		"lg-height": "330px",
// 		"lg-border-radius": "20%",
// 		"height": "340px",
// 		"border-radius": "20%",
// 		"position": "absolute",
// 		"top": "-3px",
// 		"width": "100%",
// 		"display": "flex",
// 		"align-items": "center",
// 		"flex-direction": "column",
// 		"lg-background": "rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Subtract.svg?v=2021-03-21T00:44:33.775Z) 0% 0% /100% no-repeat scroll padding-box",
// 		"md-background": "rgba(255, 255, 255, 0.43) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Subtract.svg?v=2021-03-21T00:44:33.775Z) 0% 0%/100% no-repeat",
// 		"sm-background": "rgba(255, 255, 255, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Subtract.svg?v=2021-03-21T00:44:33.775Z) 0% 0%/100% no-repeat",
// 		"justify-content": "flex-end",
// 		"background": "rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Subtract.svg?v=2021-03-21T00:44:33.775Z) 0% 0% /100% no-repeat scroll padding-box"
// 	}
// },