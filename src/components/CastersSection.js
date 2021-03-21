import React from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import PodcasterCard from "./PodcasterCard";
const defaultProps = {
	"quarkly-title": "BodySection",
	"sm-flex-direction": "column",
	"sm-align-items": "center",
	"md-flex-direction": "column",
	"md-justify-content": "space-evenly",
	"sm-height": "auto",
	"sm-min-height": "500px",
	"display": "block",
	"background": "--color-background"
};
const overrides = {
	"podcasterCard": {
		"kind": "PodcasterCard",
		"props": {
			"display": "flex",
			"background": "#ffffff",
			"lg-box-shadow": "--podcastShadowActive",
			"md-box-shadow": "--podcastShadowActive",
			"sm-width": "95%"
		}
	},
	"podcasterCardOverride": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"font": "--t2",
			"children": <>
				Дмитрий Борисов
				<br />
			</>
		}
	},
	"podcasterCardOverride1": {
		"kind": "Override",
		"props": {
			"slot": "box",
			"background": "#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/_XwDijOPNLY.jpg?v=2021-03-21T08:44:58.597Z) 0 10%/100%",
			"lg-background": "#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/_XwDijOPNLY.jpg?v=2021-03-21T08:44:58.597Z) 0 10%/100%",
			"md-background": "#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/_XwDijOPNLY.jpg?v=2021-03-21T08:44:58.597Z) 0 10%/100%",
			"sm-background": "#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/_XwDijOPNLY.jpg?v=2021-03-21T08:44:58.597Z) 0 10%/100%"
		}
	},
	"podcasterCard1": {
		"kind": "PodcasterCard",
		"props": {
			"box-shadow": "--shadow",
			"background": "#ffffff",
			"sm-width": "95%",
			"sm-box-shadow": "--podcasterShadow"
		}
	},
	"podcasterCardOverride2": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"font": "--t2",
			"children": "Владимир Путин"
		}
	},
	"podcasterCardOverride3": {
		"kind": "Override",
		"props": {
			"slot": "box",
			"background": "#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/square_320_bb4b277b65949db59997d7938661b118.jpg?v=2021-03-21T00:35:44.602Z) bottom/100%",
			"lg-background": "#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/square_320_bb4b277b65949db59997d7938661b118.jpg?v=2021-03-21T00:35:44.602Z) bottom/100%",
			"md-background": "#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/square_320_bb4b277b65949db59997d7938661b118.jpg?v=2021-03-21T00:35:44.602Z) bottom/100%",
			"sm-background": "#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/square_320_bb4b277b65949db59997d7938661b118.jpg?v=2021-03-21T00:35:44.602Z) bottom/100%"
		}
	},
	"podcasterCard2": {
		"kind": "PodcasterCard",
		"props": {
			"box-shadow": "--shadow",
			"background": "#ffffff",
			"sm-width": "95%",
			"sm-box-shadow": "--podcasterShadow"
		}
	},
	"podcasterCardOverride4": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"sm-display": "block",
			"display": "block",
			"font": "18px --fontFamily-googleRoboto",
			"color": "--fontGray",
			"children": "Небольшой Покемон жёлтого цвета. Он считается мышьюили белкой, но внешне он больше похож на кролика."
		}
	},
	"podcasterCardOverride5": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"font": "--t2",
			"children": "Покемон Пикачу"
		}
	},
	"podcasterCardOverride6": {
		"kind": "Override",
		"props": {
			"slot": "box",
			"background": "#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Ash_Pikachu.png?v=2021-03-21T00:43:20.111Z) 0% 0%/100% no-repeat",
			"lg-background": "#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Ash_Pikachu.png?v=2021-03-21T00:43:20.111Z) 0% 0%/100% no-repeat",
			"md-background": "#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Ash_Pikachu.png?v=2021-03-21T00:43:20.111Z) 0% 0%/100% no-repeat",
			"sm-background": "#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Ash_Pikachu.png?v=2021-03-21T00:43:20.111Z) 0% 0%/100% no-repeat"
		}
	},
	"podcasterCardOverride7": {
		"kind": "Override",
		"props": {
			"slot": "box1",
			"font": "--t2"
		}
	}
};

const CastersSection = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			sm-margin="0px 0 0px 0"
			md-justify-content="space-around"
			md-height="500px"
			lg-height="600px"
			lg-justify-content="space-between"
			justify-content="space-between"
			height="800px"
			sm-width="100%"
			sm-padding="0px 10px 0px 0"
			sm-align-items="center"
		/>
		<PodcasterCard {...override("podcasterCard")}>
			<Override {...override("podcasterCardOverride")} />
			<Override {...override("podcasterCardOverride1")} />
		</PodcasterCard>
		<PodcasterCard {...override("podcasterCard1")}>
			<Override {...override("podcasterCardOverride2")} />
			<Override {...override("podcasterCardOverride3")} />
		</PodcasterCard>
		<PodcasterCard {...override("podcasterCard2")}>
			<Override {...override("podcasterCardOverride4")} />
			<Override {...override("podcasterCardOverride5")} />
			<Override {...override("podcasterCardOverride6")} />
			<Override {...override("podcasterCardOverride7")} />
		</PodcasterCard>
		{children}
	</Section>;
};

Object.assign(CastersSection, { ...Section,
	defaultProps,
	overrides
});
export default CastersSection;