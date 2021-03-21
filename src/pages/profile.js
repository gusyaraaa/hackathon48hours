import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"profile"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="Bio" />
		<Section quarkly-title="Following">
			<Text>
				Мои подписки
			</Text>
			<Box quarkly-title="Container" />
		</Section>
		<Section quarkly-title="LastTimeListen" height="600px">
			<Override slot="SectionContent" width="100%" padding="0px 20px 0px 20px" />
			<Text font="600 28px sans-serif">
				Последние прослушивания
			</Text>
			<Box
				quarkly-title="Container"
				display="flex"
				width="100%"
				justify-content="space-around"
				flex-wrap="wrap"
			>
				<Components.Card />
				<Components.Card />
				<Components.Card lg-display="none" sm-display="none" />
			</Box>
		</Section>
		<Components.NavBar />
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