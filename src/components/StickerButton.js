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
const items = [{
	name: "airhorn"
}, {
	name: "boi"
}, {
	name: "bruh"
}, {
	name: "cricket"
}, {
	name: "wow"
}];

const StickerButtoneElement = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

const StickerButton = props => {
	return <div></div>;
};

Object.assign(StickerButton, { ...Button,
	defaultProps,
	overrides
});
export default StickerButtoneElement;