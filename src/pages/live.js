import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"live"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="HeaderSection" background="--color-background">
			<Box quarkly-title="HeaderTitleBox" margin="50px 0px 0px 15px" font="--t1">
				<Text quarkly-title="Title">
					Сейчас в эфире
				</Text>
			</Box>
		</Section>
		<Section quarkly-title="Main" background="--color-background" flex-wrap="wrap">
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-items="flex-start"
				justify-content="flex-start"
				flex-wrap="wrap"
				font="400 18px --fontFamily-googleRoboto"
				color="--black"
			/>
			<Box
				height="362px"
				margin="10px auto 50px auto"
				background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/2.svg?v=2021-03-21T06:31:37.586Z) 0% 50%/100% repeat-x"
				border-radius="20px"
				box-shadow="--podcasterShadow"
				align-self="center"
				display="flex"
				flex-direction="column"
				justify-content="center"
				quarkly-title="StackElements"
				md-width="400px"
				lg-width="600px"
				lg-margin="10px auto 40px auto"
				lg-height="300px"
				md-height="250px"
				md-margin="0 auto 20px auto"
				md-padding="20px 0px 20px 0px"
				lg-padding="20px 0px 20px 0px"
				padding="10px 0px 10px 0px"
				sm-height="200px"
				sm-padding="20px 0px 25px 0px"
				width="600px"
			>
				<Stack flex-direction="column" justify-content="center" height="354px" width="631px">
					{"    "}
					<StackItem width="50%" display="flex" height="25%" justify-content="center">
						{"        "}{"    "}
					</StackItem>
					{"    "}
					<StackItem width="100%" display="flex" height="50%" justify-content="center">
						<Image
							width="110px"
							height="110px"
							md-width="110px"
							md-height="110px"
							md-border-radius="100px"
							md-display="flex"
							md-justify-content="center"
							md-margin="0px auto 0px auto"
							md-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Baratunde-Thurston1.jpg?v=2021-03-21T06:36:29.191Z) 0% 0% /100% no-repeat scroll padding-box"
							background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/square_320_bbadfd5684fdbc4c0c1006cf1b9a9b7d.jpg?v=2021-03-21T00:33:25.501Z) 0% 0% /100% no-repeat scroll padding-box"
							border-radius="100px"
							margin="auto auto auto auto"
							left="auto"
							right="auto"
						/>
						{"        "}{"    "}
					</StackItem>
					<StackItem
						width="100%"
						display="flex"
						flex-direction="column"
						justify-content="flex-start"
						height="25%"
					>
						<Box
							quarkly-title="TextBlock"
							margin="0px 40px 0px 40px"
							font="--t2"
							md-height="auto"
							md-display="flex"
							display="flex"
						>
							<Image
								width="3px"
								height="3px"
								margin="auto 10px auto 5px"
								quarkly-title="RedPoint"
								background="#ff0404"
								border-style="solid"
								border-color="#ffffff"
								border-radius="50%"
							/>
							<Text
								margin="auto 0px auto 0px"
								quarkly-title="PodcastName"
								sm-font="450 18px Roboto, sans-serif"
								font="--t2"
								color="--black"
							>
								Как стать тем единственным и на всегда так чтобы тебя любили{"   "}
							</Text>
						</Box>
						<Box
							quarkly-title="LowLine"
							height="30px"
							margin="5px 40px 0px 70px"
							display="flex"
							md-justify-content="start"
							md-margin="5px 40px 20px 70px"
						>
							<Text
								font="18px --fontFamily-googleRoboto"
								margin="0px 0px 0px 0px"
								lg-height="50px"
								sm-font="16px Roboto, sans-serif"
								width="300px"
							>
								Владимир Путин{"\n\n"}
							</Text>
							<Text
								margin="0 0px 0px 300px"
								display="flex"
								flex-direction="column"
								justify-content="center"
								md-width="100px"
								md-margin="0 0px 0px 100px"
								font="400 18px --fontFamily-googleRoboto"
								color="--purpleTag"
							>
								122+
							</Text>
						</Box>
						{"        "}{"    "}
					</StackItem>
				</Stack>
			</Box>
		</Section>
		<Components.NavBar>
			<Override slot="link1" width="50px" height="50px" />
			<Override slot="box" />
			<Override slot="SectionContent" />
			<Override slot="createBroadcastLink" margin="-60px 0px 0px 0px" />
			<Override slot="icon" top="16%" left="20%" />
			<Override slot="box1" margin="0px 0px 0px 0px" />
			<Override slot="link" width="50px" height="50px" />
			<Override slot="link3" width="50px" height="50px" />
		</Components.NavBar>
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