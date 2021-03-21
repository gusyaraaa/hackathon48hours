import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"md-background": "--color-subscribe",
	"md-width": "45%",
	"md-box-shadow": "--podcastShadowActive",
	"md-margin": "0px 0px 20px 0px",
	"children": "Стикер 1"
};
const overrides = {};

const StickerButton = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(StickerButton, { ...Button,
	defaultProps,
	overrides
});
export default StickerButton;