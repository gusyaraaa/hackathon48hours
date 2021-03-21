import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"livebroadcastmembers"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="HeaderSection" background="--color-background">
			<Box
				quarkly-title="HeaderTitleBox"
				margin="50px 4px 0px 0px"
				sm-display="flex"
				sm-min-height={0}
				sm-align-items="center"
				sm-height="auto"
				display="flex"
				height="auto"
				align-items="center"
				justify-content="start"
			>
				<Image width="64px" height="64px" src="https://uploads.quarkly.io/6056093da1e3530020715a39/images/5.svg?v=2021-03-21T07:26:15.829Z" md-margin="0px 0px 0px -10px" />
				<Text
					quarkly-title="Title"
					margin="px 0 0 4px"
					display="inline"
					sm-margin="px 0px 0 4px"
					font="--t1"
					lg-font="--lgHeadline2"
					md-font="--lgHeadline3"
					sm-font="normal normal 500 16px/120% --fontFamily-sans"
				>
					Прямой эфир
				</Text>
			</Box>
			<Box quarkly-title="BroadcastTitleBox">
				<Text quarkly-title="BroadcastTitle" font="--t2">
					Презентация Podcaster
				</Text>
				<Text quarkly-title="BroadcastDescription" font="--text" color="--fontGray">
					Презентация уникальной стриминговой платформы
				</Text>
			</Box>
			<Components.ListenersSection>
				<Override slot="donateListeners1" box-shadow="--shadow" />
				<Override slot="plebsListener" box-shadow="--shadow" />
				<Override slot="plebsListener1" box-shadow="--shadow" />
				<Override slot="plebsListener2" box-shadow="--shadow" />
				<Override slot="plebsListener3" box-shadow="--shadow" />
				<Override slot="plebsListener4" box-shadow="--shadow" />
				<Override slot="plebsListener5" box-shadow="--shadow" />
				<Override slot="plebsListener6" box-shadow="--shadow" />
			</Components.ListenersSection>
		</Section>
		<Components.FooterListeners>
			<Override slot="broadcastButton" box-shadow="--shadow" />
			<Override slot="broadcastButtonOverride" box-shadow="--shadow" />
		</Components.FooterListeners>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});