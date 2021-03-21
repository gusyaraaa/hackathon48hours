import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
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
			<Override slot="SectionContent" />
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
			</Box>
			<Box
				quarkly-title="InputNamePodcast"
				display="flex"
				height="70px"
				width="100%"
				justify-content="center"
				flex-direction="column"
				margin="50px 20px 0px auto"
				background="#ffffff"
				border-radius="20px"
				box-shadow="5px 7px 20px 0 rgba(0, 0, 0, 0.75)"
			>
				<Box quarkly-title="LineBox" display="flex" width="100%" justify-content="left">
					<Text quarkly-title="Box'sTest" margin="16px 0px 16px 20px" font="normal 300 26px sans-serif" color="#E0E0E0">
						Введите название трансляции{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box
				quarkly-title="InputNamePodcast"
				display="flex"
				height="70px"
				justify-content="center"
				flex-direction="column"
				margin="50px 20px 0px auto"
				background="#ffffff"
				border-radius="20px"
				box-shadow="5px 7px 20px 0 rgba(0, 0, 0, 0.75)"
				width="100%"
			>
				<Box quarkly-title="LineBox" display="flex" width="100%" justify-content="left">
					<Text quarkly-title="Box'sTest" margin="16px 0px 16px 20px" font="normal 300 26px sans-serif" color="#E0E0E0">
						@добавьте _пользователей{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box
				quarkly-title="InputDescriptionPodcast"
				display="flex"
				height="150px"
				justify-content="center"
				flex-direction="column"
				margin="50px 20px 0px auto"
				background="#ffffff"
				border-radius="20px"
				box-shadow="5px 7px 20px 0 rgba(0, 0, 0, 0.75)"
				width="100%"
				md-height="150px"
				lg-height="150px"
			>
				<Box
					quarkly-title="LineBox"
					display="flex"
					width="100%"
					justify-content="left"
					md-justify-content="flex-start"
					md-margin="-70px 0px 0px 0px"
				>
					<Text
						quarkly-title="Box'sTest"
						margin="-50px 0px 16px 20px"
						font="normal 300 26px sans-serif"
						color="#E0E0E0"
						lg-margin="-50px 0px 16px 20px"
						md-margin="0px 0px 16px 20px"
					>
						Введите описание к  трансляции{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Button
				width="300px"
				margin="30px auto 0px auto"
				height="70px"
				background="#FED851"
				border-radius="20px"
				font="30px Roboto"
				box-shadow="4px 7px 20px 0 rgba(0, 0, 0, 0.75)"
			>
				Начать
			</Button>
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