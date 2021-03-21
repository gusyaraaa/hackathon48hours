import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Text, Image } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "PodcasterCard",
	"box-sizing": "border-box",
	"sm-justify-content": "flex-end",
	"sm-position": "relative",
	"sm-box-shadow": ",--podcasterShadow",
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
	"display": "flex",
	"align-items": "center",
	"justify-content": "flex-end",
	"position": "relative",
	"sm-height": "auto",
	"sm-padding": "25px 0px 25px 0px",
	"sm-align-items": "center",
	"sm-min-height": "77px",
	"md-min-height": "100px",
	"md-padding": "30px 0px 30px 0px",
	"lg-padding": "35px 0px 35px 0px",
	"lg-min-height": "130px",
	"min-height": "160px",
	"padding": "50px 0px 50px 0px",
	"box-shadow": "--podcasterShadow",
	"border-width": "3px",
	"border-style": "solid",
	"border-color": "--color-purple",
	"border-radius": "40px",
	"lg-border-radius": "35px",
	"md-border-radius": "30px",
	"sm-border-radius": "25px"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Avatar",
			"sm-height": "78px",
			"sm-width": "78px",
			"sm-border-radius": "25px",
			"sm-background": "#7f7f7f",
			"sm-position": "absolute",
			"sm-left": "-3px",
			"md-height": "100px",
			"md-width": "100px",
			"md-background": "#a5a5a5",
			"md-border-radius": "30px",
			"md-position": "absolute",
			"md-left": "-3px",
			"lg-width": "133px",
			"lg-height": "133px",
			"lg-background": "#c5c5c5",
			"lg-border-radius": "35px",
			"lg-left": "-3px",
			"lg-position": "absolute",
			"position": "absolute",
			"left": "-3px",
			"width": "163px",
			"height": "163px",
			"background": "#838383",
			"border-radius": "40px",
			"sm-top": "-3px",
			"lg-top": "-3px",
			"top": "-3px",
			"border-width": "3px",
			"border-color": "--color-purple",
			"bottom": "auto",
			"right": "auto",
			"border-style": "solid",
			"md-top": "-3px"
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
			"align-items": "flex-start",
			"padding": "0px 10p 0px 0px"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"justify-content": "space-between",
			"width": "95%"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"quarkly-title": "Name",
			"sm-font": "13px sans-serif",
			"lg-font": "20px sans-serif",
			"font": "400 24px sans-serif",
			"sm-margin": "0 0px 0 0px",
			"md-margin": "0 0px 0 0px",
			"lg-margin": "0 0px 0 0px",
			"children": "Остап Бендер"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px",
			"src": "https://uploads.quarkly.io/6056093da1e3530020715a39/images/dollar.png?v=2021-03-20T22:38:08.918Z",
			"md-width": "40px",
			"md-height": "40px",
			"sm-width": "30px",
			"sm-height": "30px"
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

const DonateListeners = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")} />
		<Box {...override("box1")}>
			<Box {...override("box2")}>
				<Text {...override("text")} />
				<Image {...override("image")} />
			</Box>
			<Text {...override("text1")} />
		</Box>
		{children}
	</Box>;
};

Object.assign(DonateListeners, { ...Box,
	defaultProps,
	overrides
});
export default DonateListeners;