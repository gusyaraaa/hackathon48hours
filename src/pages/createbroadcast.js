import React from "react";
import theme from "theme";
import { Theme, Link, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override } from "@quarkly/components";
import * as Components from "components";
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
		<Section quarkly-title="MainSection" background="#FCFCFC" height="auto" padding="30px 0 200px 0">
			<Box
				display="flex"
				width="250px"
				height="auto"
				margin="70px auto 30px auto"
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
					md-width="200px"
					md-height="200px"
				/>
			</Box>
			<Input
				quarkly-title="InputNamePodcast"
				width="100%"
				placeholder="Введите название трансляции"
				required
				type="text"
				name="translationName"
				padding="20px 20px 20px 20px"
				background="--color-background"
				border-width={0}
				border-color="rgba(119, 119, 119, 0.47)"
				box-shadow="--podcasterShadow"
				border-radius="15px"
				margin="0px 0px 20px 0px"
				md-padding="15px 15px 15px 15px"
				md-margin="0px 0px 15px 0px"
			/>
			<Input
				quarkly-title="InputAdd"
				width="100%"
				placeholder="@добавьте_пользователей"
				required
				type="text"
				name="listeners"
				padding="20px 20px 20px 20px"
				border-width={0}
				border-color="--color-fontGray"
				box-shadow="--podcasterShadow"
				border-radius="15px"
				margin="0px 0px 20px 0px"
				md-padding="15px 15px 15px 15px"
				md-margin="0px 0px 15px 0px"
			/>
			<Input
				quarkly-title="InputDescriptionPodcast"
				width="100%"
				placeholder="Введите описание трансляции"
				required
				type="text"
				name="description"
				padding="20px 20px 20px 20px"
				box-shadow="--podcasterShadow"
				border-radius="15px"
				margin="0px 0px 40px 0px"
				md-padding="15px 15px 15px 15px"
				md-margin="0px 0px 30px 0px"
				as="textarea"
				height="auto"
				min-width="100%"
				min-height="120px"
				max-width="100%"
				max-height="180px"
			/>
			<Button
				width="300px"
				margin="55px auto 0px auto"
				height="70px"
				background="#FED851"
				border-radius="20px"
				font="30px Roboto"
				box-shadow="--podcasterShadow"
				md-padding="5px 20px 5px 20px"
				md-font="24px Roboto"
			>
				Начать
			</Button>
		</Section>
		<Components.NavBar>
			<Override slot="link" width="50px" height="50px" />
			<Override slot="link1" width="50px" height="50px" />
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