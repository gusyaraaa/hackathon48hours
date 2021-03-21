import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"createbroadcast"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="MainSection" background="#FCFCFC" height="1300px">
			<Box
				display="flex"
				width="250px"
				height="auto"
				margin="70px auto 0px auto"
				quarkly-title="Avatar"
				min-width="200px"
				min-height="auto"
				justify-content="center"
			>
				<Box
					quarkly-title="Image"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Ash_Pikachu.png?v=2021-03-21T00:43:20.111Z) 0% 0% /100% no-repeat scroll border-box"
					width="300px"
					height="300px"
					border-radius="100px"
					display="flex"
				/>
				<Box
					quarkly-title="RedPoint"
					position="relative"
					width="10px"
					height="10px"
					border-radius="50%"
					border-color="rgba(255, 255, 255, 0)"
					background="#ff0000"
					left="-20%"
					bottom="-10%"
				/>
			</Box>
			<Box quarkly-title="InputNamePodcast">
				<Box quarkly-title="LineBox">
					<Text quarkly-title="Box'sTest">
						Some text
					</Text>
					<Box
						quarkly-title="RedPoint"
						position="relative"
						width="10px"
						height="10px"
						border-radius="50%"
						border-color="rgba(255, 255, 255, 0)"
						background="#ff0000"
						left="-20%"
						bottom="-10%"
					/>
				</Box>
			</Box>
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