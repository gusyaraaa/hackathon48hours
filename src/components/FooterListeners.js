import React from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
import BroadcastButton from "./BroadcastButton";
const defaultProps = {
	"quarkly-title": "FooterSection"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"height": "28px"
		}
	},
	"broadcastButton": {
		"kind": "BroadcastButton",
		"props": {
			"max-width": "50%",
			"width": "150px",
			"height": "42px",
			"margin": "0px auto 0px auto",
			"box-shadow": "--shadow"
		}
	},
	"broadcastButtonOverride": {
		"kind": "Override",
		"props": {
			"slot": "box",
			"width": "80px",
			"height": "30px",
			"box-shadow": "--shadow",
			"margin": "4px 0px 0px 50%",
			"position": "relative",
			"top": "15%",
			"background": "#922bb7",
			"right": "3%"
		}
	}
};

const FooterListeners = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<BroadcastButton {...override("broadcastButton")}>
				<Override {...override("broadcastButtonOverride")} />
			</BroadcastButton>
		</Box>
		{children}
	</Section>;
};

Object.assign(FooterListeners, { ...Section,
	defaultProps,
	overrides
});
export default FooterListeners;