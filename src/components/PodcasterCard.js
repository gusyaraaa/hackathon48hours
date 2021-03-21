import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Text } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "PodcasterCard",
	"box-sizing": "border-box",
	"sm-justify-content": "flex-end",
	"sm-position": "relative",
	"md-height": "auto",
	"md-box-shadow": "--podcasterShadow",
	"md-align-items": "center",
	"md-justify-content": "flex-end",
	"md-position": "relative",
	"lg-flex-direction": "row",
	"lg-align-items": "center",
	"lg-justify-content": "flex-end",
	"lg-height": "auto",
	"lg-box-shadow": "--podcasterShadow",
	"lg-position": "relative",
	"width": "100%",
	"height": "auto",
	"border-radius": "25px",
	"display": "flex",
	"align-items": "center",
	"justify-content": "flex-end",
	"position": "relative",
	"sm-height": "auto",
	"sm-padding": "30px 0px 30px 0px",
	"sm-align-items": "center",
	"sm-min-height": "77px",
	"md-min-height": "100px",
	"md-padding": "35px 0px 35px 0px",
	"lg-padding": "40px 0px 40px 0px",
	"lg-min-height": "130px",
	"min-height": "160px",
	"padding": "50px 0px 50px 0px",
	"sm-box-shadow": "--podcastShadowActive",
	"box-shadow": "--podcastShadowActive",
	"transition": "all 0.2s ease 0s"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Avatar",
			"sm-height": "77px",
			"sm-width": "78px",
			"sm-border-radius": "25px",
			"sm-background": "#7f7f7f",
			"sm-position": "absolute",
			"sm-left": 0,
			"md-height": "100px",
			"md-width": "100px",
			"md-background": "#a5a5a5",
			"md-border-radius": "25px",
			"md-position": "absolute",
			"md-left": 0,
			"lg-width": "130px",
			"lg-height": "130px",
			"lg-background": "#c5c5c5",
			"lg-border-radius": "25px",
			"lg-left": 0,
			"lg-position": "absolute",
			"position": "absolute",
			"left": 0,
			"width": "160px",
			"height": "160px",
			"border-radius": "25px",
			"sm-top": 0,
			"md-top": 0,
			"lg-top": 0,
			"top": 0,
			"background": "#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/square_320_bbadfd5684fdbc4c0c1006cf1b9a9b7d.jpg?v=2021-03-21T00:33:25.501Z) top/100%"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"md-text-align": "left",
			"quarkly-title": "ContainerText",
			"sm-text-align": "left",
			"sm-display": "flex",
			"sm-flex-direction": "column",
			"sm-align-items": "flex-start",
			"sm-width": "60%",
			"sm-min-height": "0px",
			"sm-height": "auto",
			"md-width": "60%",
			"md-height": "auto",
			"md-min-height": 0,
			"md-padding": "0 0px 0 0px",
			"sm-padding": "0 0px 0 0px",
			"lg-width": "60%",
			"md-display": "flex",
			"md-flex-direction": "column",
			"md-align-items": "flex-start",
			"lg-display": "flex",
			"lg-flex-direction": "column",
			"lg-align-items": "flex-start",
			"lg-height": "auto",
			"lg-min-height": 0,
			"width": "60%",
			"height": "auto",
			"display": "flex",
			"flex-direction": "column",
			"align-items": "flex-start"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"quarkly-title": "Name",
			"sm-font": "13px sans-serif",
			"lg-font": "20px sans-serif",
			"font": "24px sans-serif",
			"sm-margin": "0 0px 0 0px",
			"md-margin": "0 0px 0 0px",
			"lg-margin": "0 0px 0 0px",
			"children": "Анастасия Ивлеева"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"quarkly-title": "Description",
			"md-color": "--fontGray",
			"sm-font": "12px sans-serif",
			"sm-display": "none",
			"sm-width": "90%",
			"md-display": "none",
			"md-width": "90%",
			"lg-width": "90%",
			"lg-margin": "20px 0px 16px 0px",
			"lg-display": "none",
			"width": "90%",
			"lg-font": "18px",
			"font": "20px",
			"display": "none",
			"children": "Небольшой Покемон жёлтого цвета. Он считается мышьюили белкой, но внешне он больше похож на кролика."
		}
	}
};

const PodcasterCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")} />
		<Box {...override("box1")}>
			<Text {...override("text")} />
			<Text {...override("text1")} />
		</Box>
		{children}
	</Box>;
};

Object.assign(PodcasterCard, { ...Box,
	defaultProps,
	overrides
});
export default PodcasterCard;