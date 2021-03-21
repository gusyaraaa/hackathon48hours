import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "BroadcastButton",
	"min-width": "115px",
	"background": "#ffffff",
	"border-radius": "20px",
	"box-shadow": "2px 2px 5px 1px rgba(0, 0, 0, 0.57)"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"quarkly-title": "SwitchButton",
			"background": "#FED851",
			"border-radius": "20px",
			"max-width": "50%",
			"margin": "4px 0px 0px 2px",
			"box-shadow": "1px 1px 2px 1px rgba(0, 0, 0, 0.58)"
		}
	}
};

const BroadcastButton = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")} />
		{children}
	</Box>;
};

Object.assign(BroadcastButton, { ...Box,
	defaultProps,
	overrides
});
export default BroadcastButton;