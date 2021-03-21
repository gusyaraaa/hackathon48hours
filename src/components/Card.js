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
	"width": "350px",
	"height": "auto",
	"position": "relative"
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
			"height": "350px",
			"border-radius": "20%",
			"background": "#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2064.png?v=2021-03-21T00:17:18.652Z) -5px/115% no-repeat",
			"lg-background": "--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2064.png?v=2021-03-21T00:17:18.652Z) -5px/110% no-repeat",
			"md-background": "--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2065.png?v=2021-03-21T00:17:18.651Z) -5px/115% no-repeat",
			"sm-background": "--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2068.png?v=2021-03-21T00:17:18.652Z) -3px/110% no-repeat"
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
			"lg-height": "300px",
			"lg-border-radius": "20%",
			"height": "350px",
			"border-radius": "20%",
			"position": "absolute",
			"width": "100%",
			"background": "--color-filterImage",
			"lg-background": "--color-filterImage",
			"md-background": "--color-filterImage",
			"sm-background": "--color-filterImage"
		}
	},
	"box2": {
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
			"sm-font": "normal 13px sans-serif",
			"sm-text-align": "left",
			"quarkly-title": "Name podcast",
			"sm-margin": "0 0px 5px 0px",
			"sm-max-height": "30px",
			"sm-min-height": "15px",
			"md-min-height": "10px",
			"lg-min-height": "14px",
			"lg-font": "18px sans-serif",
			"min-height": "18px",
			"font": "24px sans-serif",
			"children": <>
				Почему никому невозможно верить{"\n\n"}
			</>
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"sm-height": "15px",
			"sm-font": "normal 12px sans-serif",
			"sm-text-align": "left",
			"quarkly-title": "Name's podcaster",
			"sm-margin": "0 0px 0 0px",
			"sm-border-color": "#4d4d4d",
			"sm-color": "--fontGray",
			"md-font": "14px sans-serif",
			"md-min-height": "10px",
			"lg-min-height": "14px",
			"min-height": "18ox",
			"font": "20px sans-serif",
			"children": <>
				Так вышло{"\n\n"}
			</>
		}
	}
};

const Card = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")}>
			<Box {...override("box1")} />
		</Box>
		<Box {...override("box2")}>
			<Text {...override("text")} />
			<Text {...override("text1")} />
		</Box>
		{children}
	</Box>;
};

Object.assign(Card, { ...Box,
	defaultProps,
	overrides
});
export default Card;