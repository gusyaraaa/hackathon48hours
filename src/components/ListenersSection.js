import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import DonateListeners from "./DonateListeners";
import PlebsListener from "./PlebsListener";
const defaultProps = {
	"quarkly-title": "BodySection",
	"justify-content": "end",
	"background": "--color-background"
};
const overrides = {
	"donateListeners": {
		"kind": "DonateListeners",
		"props": {
			"background": "#ffffff"
		}
	},
	"donateListenersOverride": {
		"kind": "Override",
		"props": {
			"slot": "text"
		}
	},
	"donateListenersOverride1": {
		"kind": "Override",
		"props": {
			"slot": "box"
		}
	},
	"donateListenersOverride2": {
		"kind": "Override",
		"props": {
			"slot": "image",
			"color": "rgba(0, 0, 0, 0)",
			"src": "https://uploads.quarkly.io/6056093da1e3530020715a39/images/%D0%B4%D0%B5%D0%BD%D1%8C%D0%B3%D0%B8.png?v=2021-03-21T08:24:28.844Z"
		}
	},
	"donateListeners1": {
		"kind": "DonateListeners",
		"props": {
			"margin": "0px 0px 40px 0px",
			"lg-margin": "0px 0px 30px 0px",
			"sm-margin": "0px 0px 10px 0px",
			"md-margin": "0px 0px 20px 0px",
			"background": "#ffffff"
		}
	},
	"donateListenersOverride3": {
		"kind": "Override",
		"props": {
			"slot": "box2",
			"font": "--t2"
		}
	},
	"donateListenersOverride4": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"font": "--t2"
		}
	},
	"donateListenersOverride5": {
		"kind": "Override",
		"props": {
			"slot": "box"
		}
	},
	"donateListenersOverride6": {
		"kind": "Override",
		"props": {
			"slot": "image",
			"src": "https://uploads.quarkly.io/6056093da1e3530020715a39/images/%D0%B4%D0%B5%D0%BD%D1%8C%D0%B3%D0%B8.png?v=2021-03-21T08:24:28.844Z"
		}
	},
	"plebsListener": {
		"kind": "PlebsListener",
		"props": {
			"padding": "30px 0px 30px 0px",
			"lg-padding": "20px 0px 20px 0px",
			"md-padding": "15px 0px 15px 0px",
			"sm-padding": "15px 0px 15px 0px",
			"background": "#ffffff"
		}
	},
	"plebsListenerOverride": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"font": "--t2"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {
			"width": "100%",
			"font": "--t2"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"stack1": {
		"kind": "Stack",
		"props": {
			"flex-direction": "column",
			"width": "100%"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"children": <>
				{"        "}{"    "}
			</>
		}
	},
	"plebsListener1": {
		"kind": "PlebsListener",
		"props": {
			"color": "#000000",
			"background": "#ffffff"
		}
	},
	"plebsListenerOverride1": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"font": "--t2"
		}
	},
	"plebsListener2": {
		"kind": "PlebsListener",
		"props": {
			"color": "#000000",
			"background": "#ffffff"
		}
	},
	"plebsListenerOverride2": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"font": "--t2"
		}
	},
	"plebsListener3": {
		"kind": "PlebsListener",
		"props": {
			"color": "#000000",
			"background": "#ffffff"
		}
	},
	"plebsListenerOverride3": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"font": "--t2"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"stack2": {
		"kind": "Stack",
		"props": {
			"flex-direction": "column",
			"width": "100%"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"children": <>
				{"        "}{"    "}
			</>
		}
	},
	"plebsListener4": {
		"kind": "PlebsListener",
		"props": {
			"color": "#000000",
			"background": "#ffffff"
		}
	},
	"plebsListenerOverride4": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"font": "--t2"
		}
	},
	"plebsListener5": {
		"kind": "PlebsListener",
		"props": {
			"color": "#000000",
			"background": "#ffffff"
		}
	},
	"plebsListenerOverride5": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"font": "--t2"
		}
	},
	"plebsListener6": {
		"kind": "PlebsListener",
		"props": {
			"color": "#000000",
			"background": "#ffffff"
		}
	},
	"plebsListenerOverride6": {
		"kind": "Override",
		"props": {
			"slot": "box",
			"font": "--t2"
		}
	},
	"plebsListenerOverride7": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"font": "--t2"
		}
	},
	"stackItem4": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"children": <>
				{"        "}{"    "}
			</>
		}
	}
};

const ListenersSection = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			sm-width="100%"
			sm-height="auto"
			width="100%"
			height="auto"
			min-height="1000px"
			padding="0px 30px 0px 30px"
			align-items="center"
		/>
		<DonateListeners {...override("donateListeners")}>
			<Override {...override("donateListenersOverride")} />
			<Override {...override("donateListenersOverride1")} />
			<Override {...override("donateListenersOverride2")} />
		</DonateListeners>
		<DonateListeners {...override("donateListeners1")}>
			<Override {...override("donateListenersOverride3")} />
			<Override {...override("donateListenersOverride4")} />
			<Override {...override("donateListenersOverride5")} />
			<Override {...override("donateListenersOverride6")} />
		</DonateListeners>
		<PlebsListener {...override("plebsListener")}>
			<Override {...override("plebsListenerOverride")} />
		</PlebsListener>
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Stack {...override("stack1")}>
					{"    "}
					<StackItem {...override("stackItem1")} />
					<PlebsListener {...override("plebsListener1")}>
						<Override {...override("plebsListenerOverride1")} />
					</PlebsListener>
					{"    "}
					<PlebsListener {...override("plebsListener2")}>
						<Override {...override("plebsListenerOverride2")} />
					</PlebsListener>
					<PlebsListener {...override("plebsListener3")}>
						<Override {...override("plebsListenerOverride3")} />
					</PlebsListener>
				</Stack>
				{"        "}{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem2")}>
				<Stack {...override("stack2")}>
					{"    "}
					<StackItem {...override("stackItem3")} />
					<PlebsListener {...override("plebsListener4")}>
						<Override {...override("plebsListenerOverride4")} />
					</PlebsListener>
					{"    "}
					<PlebsListener {...override("plebsListener5")}>
						<Override {...override("plebsListenerOverride5")} />
					</PlebsListener>
					<PlebsListener {...override("plebsListener6")}>
						<Override {...override("plebsListenerOverride6")} />
						<Override {...override("plebsListenerOverride7")} />
					</PlebsListener>
					<StackItem {...override("stackItem4")} />
				</Stack>
				{"        "}{"    "}
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(ListenersSection, { ...Section,
	defaultProps,
	overrides
});
export default ListenersSection;