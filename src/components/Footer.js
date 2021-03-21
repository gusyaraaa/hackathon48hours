import React from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import { Image, Box } from "@quarkly/widgets";
import BroadcastButton from "./BroadcastButton";
const defaultProps = {
	"quarkly-title": "FooterSection"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"justify-content": "space-between"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"quarkly-title": "AudioSticker"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "35px",
			"height": "35px",
			"src": "https://uploads.quarkly.io/6056093da1e3530020715a39/images/68747470733a2f2f63646e2e73686f706966792e636f6d2f732f66696c65732f312f313036312f313932342f70726f64756374732f5370656563685f427562626c655f456d6f6a695f6c617267652e706e673f763d31343830343831303632.webp?v=2021-03-21T08:02:58.740Z"
		}
	},
	"broadcastButton": {
		"kind": "BroadcastButton",
		"props": {
			"sm-box-shadow": "--podcasterShadow",
			"height": "42px",
			"width": "150px",
			"background": "#fff",
			"box-shadow": "--shadow"
		}
	},
	"broadcastButtonOverride": {
		"kind": "Override",
		"props": {
			"slot": "box",
			"height": "30px",
			"width": "80px",
			"margin": "6px 0px 5px 4px",
			"box-shadow": "--shadow",
			"background": "#ffd439"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Sticker"
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"width": "35px",
			"height": "35px",
			"src": "https://uploads.quarkly.io/6056093da1e3530020715a39/images/63d38d8cbba4335a6d28b5e19f67be8d.png?v=2021-03-21T07:56:14.568Z",
			"sm-width": "30px",
			"sm-height": "30px"
		}
	}
};

const Footer = props => {
	const {
		override,
		children,
		rest,
		onSwipeButton
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<Image {...override("image")} />
			</Box>
			<BroadcastButton onClick={onSwipeButton} {...override("broadcastButton")}>
				<Override {...override("broadcastButtonOverride")} />
			</BroadcastButton>
			<Box {...override("box2")}>
				<Image {...override("image1")} />
			</Box>
		</Box>
		{children}
	</Section>;
};

Object.assign(Footer, { ...Section,
	defaultProps,
	overrides
});
export default Footer;