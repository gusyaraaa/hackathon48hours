import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Text } from "@quarkly/widgets";
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
	"width": "200px",
	"height": "auto",
	"position": "relative",
	"sm-align-items": "flex-start"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Image",
			"sm-width": "100px",
			"sm-height": "100px",
			"sm-border-radius": "25%",
			"sm-margin": "0px 0px 5px 0px",
			"md-height": "120px",
			"md-border-radius": "25%",
			"lg-height": "160px",
			"lg-border-radius": "20%",
			"height": "190px",
			"border-radius": "20%",
			"background": "#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%20707.png?v=2021-03-21T03:08:17.610Z) -5px/120% no-repeat",
			"lg-background": "--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%20707.png?v=2021-03-21T03:08:17.610Z) -5px/120% no-repeat",
			"md-background": "--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%20707.png?v=2021-03-21T03:08:17.610Z) -5px/120% no-repeat",
			"sm-background": "--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%20707.png?v=2021-03-21T03:08:17.610Z) -3px/120% no-repeat",
			"width": "190px",
			"lg-width": "160px",
			"md-width": "120px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Texts",
			"sm-display": "flex",
			"sm-flex-direction": "column",
			"sm-justify-content": "start",
			"sm-align-items": "flex-start"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"sm-height": "15px",
			"sm-font": "normal 12px sans-serif",
			"sm-text-align": "left",
			"quarkly-title": "Name's podcaster",
			"sm-margin": "0 0px 0 0px",
			"sm-border-color": "#4d4d4d",
			"sm-color": "--fontGray",
			"md-font": "16px sans-serif",
			"md-min-height": "10px",
			"lg-min-height": "14px",
			"min-height": "18ox",
			"font": "20px sans-serif",
			"color": "--fontGray",
			"margin": "0 0px 0 0px",
			"children": "И. Варламов"
		}
	}
};

const FollowerCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")} />
		<Box {...override("box1")}>
			<Text {...override("text")} />
		</Box>
		{children}
	</Box>;
};

Object.assign(FollowerCard, { ...Box,
	defaultProps,
	overrides
});
export default FollowerCard;