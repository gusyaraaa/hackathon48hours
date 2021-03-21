import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Tag",
	"background": "--color-background",
	"border-radius": "13px",
	"box-shadow": "--podcasterShadow",
	"padding": "15px 15px 15px 15px",
	"text-align": "center",
	"display": "flex",
	"align-items": "center",
	"justify-content": "center",
	"lg-padding": "12px 12px 12px 12px",
	"md-padding": "10px 10px 10px 10px",
	"sm-padding": "8px 8px 8px 8px",
	"width": "auto"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"width": "auto",
			"text-align": "center",
			"font": "600 18px sans-serif",
			"lg-font": "600 16px sans-serif",
			"md-font": "500 14px sans-serif",
			"sm-font": "500 12px sans-serif",
			"color": "--greenTag",
			"children": "Спорт и события"
		}
	}
};

const Tag = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		{children}
	</Box>;
};

Object.assign(Tag, { ...Box,
	defaultProps,
	overrides
});
export default Tag;