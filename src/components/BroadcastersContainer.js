import React, { useState, Fragment } from 'react';
import atomize from "@quarkly/atomize";
import { AudioController } from "hackaton-uikit-audio-controller";
const controller = new AudioController("https://syleront.cf:4444", 4096, 16, 12);
controller.connect();
console.log("Micropohe state: ", controller.isSpeakEnabled());
import CastersSection from "./CastersSection";
import ListenersSection from "./ListenersSection";
import FooterListeners from "./FooterListeners";
import FooterBroadcasters from "./Footer";

const BroadcastersContainer = props => {
	const [panel, setPanel] = useState("broadcasters");
	console.log(panel);
	return <div tabIndex="1" onClick={evt => {
		if (window.isDmitry === true) {
			if (controller.isSpeakEnabled()) {
				console.log("Disable mic");
				controller.speakOff();
			} else {
				console.log("Enable mic");
				controller.speakOn();
			}
		} else {
			console.log("You're not a Dmitry");
		}
	}} {...props}>
		      
		{panel === "broadcasters" ? <Fragment>
			            
			<CastersSection />
			            
			<FooterBroadcasters onClick={() => setPanel("listeners")} />
			          
		</Fragment> : <Fragment>
			            
			<ListenersSection />
			            
			<FooterListeners onClick={() => setPanel("broadcasters")} />
			          
		</Fragment>}
		    
	</div>;
};

export default atomize(BroadcastersContainer)({
	name: "BroadcastersContainer",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "BroadcastersContainer — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});