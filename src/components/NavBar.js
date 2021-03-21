import React from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import { Link, Icon, Box } from "@quarkly/widgets";
import { TiPlus } from "react-icons/ti";
const defaultProps = {
	"quarkly-title": "NavBar",
	"sm-position": "fixed",
	"sm-bottom": 0,
	"sm-top": "auto",
	"position": "fixed",
	"bottom": 0,
	"margin": "0 0 0 0",
	"height": "auto",
	"padding": "0 0 0 0",
	"width": "100%"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"flex-direction": "row",
			"justify-content": "space-around",
			"quarkly-title": "NavBox",
			"position": "relative",
			"margin": "0 0px 0px 0px",
			"box-shadow": "--podcasterShadow",
			"height": "100%",
			"padding": "20px 0px 20px 0px",
			"background": "--color-background",
			"width": "100%"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"quarkly-title": "LinkProfile",
			"background": "rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2021-03-20_192233%201.svg?v=2021-03-21T01:19:14.821Z) 0% 0% /100% no-repeat scroll padding-box",
			"width": "64px",
			"height": "64px",
			"lg-width": "50px",
			"lg-height": "50px",
			"md-width": "38px",
			"md-height": "38px",
			"sm-width": "24px",
			"sm-height": "24px",
			"href": "Profile"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"quarkly-title": "LinkHome",
			"background": "rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Vector.svg?v=2021-03-21T01:19:14.820Z) 0% 0% /100% no-repeat scroll padding-box",
			"width": "64px",
			"height": "64px",
			"lg-width": "50px",
			"lg-height": "50px",
			"md-width": "38px",
			"md-height": "38px",
			"sm-width": "24px",
			"sm-height": "24px",
			"href": "index"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"quarkly-title": "StartLive",
			"lg-display": "flex",
			"lg-background": "--color-background",
			"lg-border-radius": "50%",
			"lg-right": "10px",
			"lg-border-width": "10px",
			"lg-border-style": "solid",
			"lg-border-color": "rgba(0, 0, 0, 0)",
			"lg-hover-cursor": "pointer",
			"position": "static",
			"bottom": "auto",
			"right": "297px",
			"cursor": "pointer",
			"border-width": "10px",
			"border-style": "solid",
			"border-color": "rgba(0, 0, 0, 0)",
			"border-radius": "50%",
			"box-shadow": "--podcasterShadow",
			"width": "64px",
			"height": "64px",
			"display": "flex",
			"flex-direction": "column",
			"align-items": "center",
			"justify-content": "center",
			"top": "-47px",
			"left": "auto",
			"margin": "-60px 0px 0px 0px",
			"md-width": "38px",
			"md-height": "38px",
			"sm-width": "24px",
			"sm-height": "24px",
			"lg-margin": "-55px 0px 0px 0px",
			"md-margin": "-50px 0px 0px 0px",
			"sm-margin": "-40px 0px 0px 0px",
			"lg-width": "50px",
			"lg-height": "50px",
			"background": "--color-background"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "ti",
			"icon": TiPlus,
			"lg-display": "block",
			"lg-margin": "0px auto 0px auto",
			"display": "block",
			"color": "#FFC107",
			"font": "40px sans-serif",
			"sm-width": "24px",
			"sm-height": "24px",
			"sm-font": "24px sans-serif"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"quarkly-title": "LinkLive",
			"width": "64px",
			"height": "64px",
			"background": "rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/live-streaming%201.svg?v=2021-03-21T01:19:14.825Z) 0% 0% /100% no-repeat",
			"lg-width": "50px",
			"lg-height": "50px",
			"md-height": "38px",
			"md-width": "38px",
			"sm-width": "24px",
			"sm-height": "24px",
			"href": "Live"
		}
	},
	"SectionContent": {
		"props": {
			"width": "100%",
			"max-width": "100%"
		}
	},
	"createBroadcastLink": {
		"kind": "Link",
		"props": {
			"href": "CreateBroadcast"
		}
	}
};

const NavBar = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" margin="0px 0 0px 0" width="100%" height="100%" />
		<Box {...override("box")}>
			<Link {...override("link")} />
			<Link {...override("link1")} />
			<Link {...override("createBroadcastLink")}>
				<Box {...override("box1")}>
					<Icon {...override("icon")} />
				</Box>
			</Link>
			<Link {...override("link2")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(NavBar, { ...Section,
	defaultProps,
	overrides
});
export default NavBar;