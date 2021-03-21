import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"livebroadcast"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="HeaderSection" background="--color-background">
			<Override slot="SectionContent" />
			<Box
				quarkly-title="HeaderTitleBox"
				margin="50px 0px 0px 15px"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="start"
				display="flex"
				align-items="center"
				justify-content="flex-start"
				md-margin="50px 0px 0px 0"
			>
				<Box display="flex" align-items="center">
					<Image width="64px" height="64px" src="https://uploads.quarkly.io/6056093da1e3530020715a39/images/5.svg?v=2021-03-21T07:26:15.829Z" md-margin="0px 0px 0px -10px" />
					<Text
						quarkly-title="Title"
						sm-font="--t1"
						margin="0px 0px 0 0px"
						display="inline"
						sm-margin="0px 0px 0 0px"
						font="--t1"
						lg-font="--t1"
						md-font="--lgHeadline3"
					>
						Прямой эфир
					</Text>
				</Box>
			</Box>
			<Box quarkly-title="BroadcastTitleBox">
				<Text quarkly-title="BroadcastTitle" font="--t2">
					Презентация Podcaster{"\n\n"}
				</Text>
				<Text quarkly-title="BroadcastDescription" font="--text" color="--fontGray">
					Обсуждаем чебуреки. Ставьте  ❤, если любите с сыром, и ✌🏻 если любите с мясом{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section quarkly-title="Content">
			<Components.BroadcastersContainer />
		</Section>
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