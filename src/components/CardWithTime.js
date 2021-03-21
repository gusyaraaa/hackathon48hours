import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"sm-width": "162px",
	"sm-height": "auto",
	"sm-background": "#ffffff",
	"quarkly-title": "Card",
	"sm-display": "flex",
	"sm-flex-direction": "column",
	"md-width": "220px",
	"lg-width": "300px",
	"lg-height": "auto",
	"width": "350px",
	"height": "auto",
	"position": "relative",
	"margin-bottom": "0px"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Image",
			"sm-width": "162px",
			"sm-height": "162px",
			"sm-border-radius": "25%",
			"sm-margin": "0px 0px 10px 0px",
			"md-height": "220px",
			"md-border-radius": "25%",
			"lg-height": "300px",
			"lg-border-radius": "20%",
			"border-radius": "20%",
			"background": "#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2069.png?v=2021-03-21T00:17:18.655Z) -5px/115% no-repeat",
			"lg-background": "--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2069.png?v=2021-03-21T00:17:18.655Z) -5px/110% no-repeat",
			"md-background": "--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2069.png?v=2021-03-21T00:17:18.655Z) -5px/110% no-repeat",
			"sm-background": "--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2069.png?v=2021-03-21T00:17:18.655Z) -3px/110% no-repeat",
			"height": "349px",
			"max-height": "349px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Filter",
			"sm-width": "162px",
			"sm-height": "162px",
			"sm-border-radius": "25%",
			"sm-margin": "0px 0px 10px 0px",
			"md-height": "220px",
			"md-border-radius": "25%",
			"lg-height": "330px",
			"lg-border-radius": "20%",
			"height": "340px",
			"border-radius": "20%",
			"position": "absolute",
			"top": "-3px",
			"width": "100%",
			"display": "flex",
			"align-items": "center",
			"flex-direction": "column",
			"lg-background": "rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Subtract.svg?v=2021-03-21T00:44:33.775Z) 0% 0% /100% no-repeat scroll padding-box",
			"md-background": "rgba(255, 255, 255, 0.43) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Subtract.svg?v=2021-03-21T00:44:33.775Z) 0% 0%/100% no-repeat",
			"sm-background": "rgba(255, 255, 255, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Subtract.svg?v=2021-03-21T00:44:33.775Z) 0% 0%/100% no-repeat",
			"justify-content": "flex-end",
			"background": "rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Subtract.svg?v=2021-03-21T00:44:33.775Z) 0% 0% /100% no-repeat scroll padding-box"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "--black",
			"font": "500 20px Roboto, sans-serif",
			"margin": "10px 0px 75px 0px",
			"children": "17 марта 19:00"
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
			"color": "--black",
			"children": "Вкус или интеллект"
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
			"font": "20px sans-serif",
			"children": "Kuji podcast"
		}
	}
};

const CardWithTime = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<Text {...override("text")} />
			</Box>
		</Box>
		<Box {...override("box2")}>
			<Text {...override("text1")} />
			<Text {...override("text2")} />
		</Box>
		{children}
	</Box>;
};

Object.assign(CardWithTime, { ...Box,
	defaultProps,
	overrides
});
export default CardWithTime;