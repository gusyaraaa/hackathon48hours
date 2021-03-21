import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
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
	"border-radius": "25px",
	"box-shadow": "--podcasterShadow",
	"display": "flex",
	"align-items": "center",
	"justify-content": "flex-end",
	"position": "relative",
	"sm-height": "auto",
	"sm-padding": "30px 0px 30px 0px",
	"sm-align-items": "center",
	"sm-min-height": "50px",
	"md-min-height": "70px",
	"md-padding": "35px 0px 35px 0px",
	"lg-padding": "40px 0px 40px 0px",
	"lg-min-height": "100px",
	"min-height": "120px",
	"padding": "40px 0px 40px 0px",
	"margin": "0px 0px 30px 0px",
	"lg-margin": "0px 0px 20px 0px",
	"md-margin": "0px 0px 10px 0px",
	"sm-margin": "0px 0px 5px 0px"
};
const overrides = {
	"box": {
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
			"children": "Владимир Путин"
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

const PlebsListener = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Text {...override("text1")} />
		</Box>
		{children}
	</Box>;
};

Object.assign(PlebsListener, { ...Box,
	defaultProps,
	overrides
});
export default PlebsListener;