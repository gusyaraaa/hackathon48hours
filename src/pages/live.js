import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override } from "@quarkly/components";
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
			/>
			<Box
				width="600px"
				height="362px"
				margin="10px auto 50px auto"
				background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/image%202.svg?v=2021-03-21T00:59:45.882Z) 0% 50%/100% repeat-x"
				border-radius="20px"
				box-shadow="--podcasterShadow"
				align-self="center"
				display="block"
				flex-direction="column"
				justify-content="center"
				quarkly-title="StackElements"
				md-width="400px"
				lg-width="600px"
				flex-wrap="wrap"
				lg-margin="10px auto 40px auto"
				lg-height="300px"
				md-height="250px"
				md-margin="0 auto 20px auto"
				md-padding="20px 0px 20px 0px"
				lg-padding="20px 0px 20px 0px"
				padding="10px 0px 10px 0px"
				sm-height="200px"
				sm-padding="20px 0px 25px 0px"
			>
				<Box
					display="flex"
					width="250px"
					height="250px"
					margin="0px auto 0px auto"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2064.png?v=2021-03-21T00:17:18.652Z) 10% 0% /90% no-repeat scroll padding-box"
					border-radius="0px"
					quarkly-title="Image"
					overflow-x="hidden"
					overflow-y="hidden"
					justify-content="center"
					flex-direction="row"
					lg-width="200px"
					lg-height="200px"
					md-width="150px"
					md-height="150px"
					sm-width="120px"
					sm-height="120px"
				/>
				<Box quarkly-title="TextBlock" margin="0px 40px 0px 40px" font="--t2" sm-font="450 18px Roboto, sans-serif">
					<Box height="30px" display="flex" justify-content="left" quarkly-title="UpperRow">
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
						<Text margin="auto 0px auto 0px" quarkly-title="PodcastName">
							Женщина, вы кто?{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box quarkly-title="LowLine" height="30px" margin="5px 40px 0px 70px" display="flex">
					<Text
						font="--text"
						margin="0px 0px 0px 0px"
						lg-height="50px"
						sm-font="16px Roboto, sans-serif"
						width="300px"
					>
						Анастасия Ивлеева
					</Text>
					<Text
						margin="0 0px 0px 300px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						md-width="50px"
						md-margin="0 0px 0px 100px"
						md-height="60px"
					>
						345+
					</Text>
				</Box>
			</Box>
			<Box
				height="362px"
				margin="10px auto 50px auto"
				background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/image%202.svg?v=2021-03-21T00:59:45.882Z) 0% 50%/100% repeat-x"
				border-radius="20px"
				box-shadow="--podcasterShadow"
				align-self="center"
				display="block"
				flex-direction="column"
				justify-content="center"
				quarkly-title="StackElements"
				md-width="400px"
				lg-width="600px"
				flex-wrap="wrap"
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
				<Box
					display="flex"
					width="250px"
					height="250px"
					margin="0px auto 0px auto"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2064.png?v=2021-03-21T00:17:18.652Z) 10% 0% /90% no-repeat scroll padding-box"
					border-radius="0px"
					quarkly-title="Image"
					overflow-x="hidden"
					overflow-y="hidden"
					justify-content="center"
					flex-direction="row"
					lg-width="200px"
					lg-height="200px"
					md-width="150px"
					md-height="150px"
					sm-width="120px"
					sm-height="120px"
				/>
				<Box quarkly-title="TextBlock" margin="0px 40px 0px 40px" font="--t2">
					<Box height="30px" display="flex" justify-content="left" quarkly-title="UpperRow">
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
						<Text margin="auto 0px auto 0px" quarkly-title="PodcastName" sm-font="450 18px Roboto, sans-serif">
							Женщина, вы кто?{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box quarkly-title="LowLine" height="30px" margin="5px 40px 0px 70px" display="flex">
					<Text
						font="--text"
						margin="0px 0px 0px 0px"
						lg-height="50px"
						sm-font="16px Roboto, sans-serif"
						width="320px"
					>
						Анастасия Ивлеева
					</Text>
					<Text
						margin="0 0px 0px 300px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						md-width="50px"
						md-margin="0 0px 0px 100px"
						md-height="60px"
					>
						1234+
					</Text>
				</Box>
			</Box>
			<Box
				height="362px"
				margin="10px auto 50px auto"
				background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/image%202.svg?v=2021-03-21T00:59:45.882Z) 0% 50%/100% repeat-x"
				border-radius="20px"
				box-shadow="--podcasterShadow"
				align-self="center"
				display="block"
				flex-direction="column"
				justify-content="center"
				quarkly-title="StackElements"
				md-width="400px"
				lg-width="600px"
				flex-wrap="wrap"
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
				<Box
					display="flex"
					width="250px"
					height="250px"
					margin="0px auto 0px auto"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2064.png?v=2021-03-21T00:17:18.652Z) 10% 0% /90% no-repeat scroll padding-box"
					border-radius="0px"
					quarkly-title="Image"
					overflow-x="hidden"
					overflow-y="hidden"
					justify-content="center"
					flex-direction="row"
					lg-width="200px"
					lg-height="200px"
					md-width="150px"
					md-height="150px"
					sm-width="120px"
					sm-height="120px"
				/>
				<Box quarkly-title="TextBlock" margin="0px 40px 0px 40px" font="--t2">
					<Box height="30px" display="flex" justify-content="left" quarkly-title="UpperRow">
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
						<Text margin="auto 0px auto 0px" quarkly-title="PodcastName" sm-font="450 18px Roboto, sans-serif">
							Женщина, вы кто?{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box quarkly-title="LowLine" height="30px" margin="5px 40px 0px 70px" display="flex">
					<Text
						font="--text"
						margin="0px 0px 0px 0px"
						lg-height="50px"
						sm-font="16px Roboto, sans-serif"
						width="300px"
					>
						Анастасия Ивлеева
					</Text>
					<Text
						margin="0 0px 0px 300px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						md-width="50px"
						md-margin="0 0px 0px 100px"
						md-height="60px"
					>
						22:00
					</Text>
				</Box>
			</Box>
			<Box
				height="362px"
				margin="10px auto 50px auto"
				background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/image%202.svg?v=2021-03-21T00:59:45.882Z) 0% 50%/100% repeat-x"
				border-radius="20px"
				box-shadow="--podcasterShadow"
				align-self="center"
				display="block"
				flex-direction="column"
				justify-content="center"
				quarkly-title="StackElements"
				md-width="400px"
				lg-width="600px"
				flex-wrap="wrap"
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
				<Box
					display="flex"
					width="250px"
					height="250px"
					margin="0px auto 0px auto"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2064.png?v=2021-03-21T00:17:18.652Z) 10% 0% /90% no-repeat scroll padding-box"
					border-radius="0px"
					quarkly-title="Image"
					overflow-x="hidden"
					overflow-y="hidden"
					justify-content="center"
					flex-direction="row"
					lg-width="200px"
					lg-height="200px"
					md-width="150px"
					md-height="150px"
					sm-width="120px"
					sm-height="120px"
				/>
				<Box quarkly-title="TextBlock" margin="0px 40px 0px 40px" font="--t2">
					<Box height="30px" display="flex" justify-content="left" quarkly-title="UpperRow">
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
						<Text margin="auto 0px auto 0px" quarkly-title="PodcastName">
							Женщина, вы кто?{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box quarkly-title="LowLine" height="30px" margin="5px 40px 0px 70px" display="flex">
					<Text font="--text" margin="0px 0px 0px 0px" lg-height="50px" width="300px">
						Анастасия Ивлеева
					</Text>
					<Text
						margin="0 0px 0px 300px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						md-width="50px"
						md-margin="0 0px 0px 100px"
						md-height="60px"
					>
						12+
					</Text>
				</Box>
			</Box>
		</Section>
		<Components.NavBar>
			<Override slot="link1" width="40px" height="40px" />
			<Override slot="box" />
			<Override slot="SectionContent" />
			<Override slot="createBroadcastLink" margin="-60px 0px 0px 0px" />
			<Override slot="icon" top="16%" left="20%" />
			<Override slot="box1" margin="0px 0px 0px 0px" />
			<Override slot="link" width="40px" height="40px" />
			<Override slot="link3" width="40px" height="40px" />
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