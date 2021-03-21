import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"livebroadcast1"} />
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
					Презентация уникальной стриминговой платформы{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section
			quarkly-title="BodySection"
			sm-flex-direction="column"
			sm-align-items="center"
			md-flex-direction="column"
			md-justify-content="space-evenly"
			sm-height="auto"
			sm-min-height="500px"
			display="block"
			background="--color-background"
		>
			<Override
				slot="SectionContent"
				sm-margin="0px 0 0px 0"
				md-justify-content="flex-start"
				md-height="500px"
				lg-height="600px"
				lg-justify-content="space-between"
				justify-content="space-between"
				height="800px"
				sm-width="100%"
				sm-padding="0px 10px 0px 0"
				sm-align-items="center"
			/>
			<Components.PodcasterCard
				display="flex"
				background="#ffffff"
				lg-box-shadow="--podcastShadowActive"
				md-box-shadow="--podcastShadowActive"
				sm-width="95%"
			>
				<Override slot="text" font="--t2">
					Дмитрий Борисов
					<br />
				</Override>
				<Override
					slot="box"
					background="#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/_XwDijOPNLY.jpg?v=2021-03-21T08:44:58.597Z) 0 10%/100%"
					lg-background="#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/_XwDijOPNLY.jpg?v=2021-03-21T08:44:58.597Z) 0 10%/100%"
					md-background="#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/_XwDijOPNLY.jpg?v=2021-03-21T08:44:58.597Z) 0 10%/100%"
					sm-background="#838383 url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/_XwDijOPNLY.jpg?v=2021-03-21T08:44:58.597Z) 0 10%/100%"
				/>
			</Components.PodcasterCard>
		</Section>
		<Text md-padding="20px 30px 15px 30px" md-font="--t1">
			Стикеры
			<br />
		</Text>
		<Section quarkly-title="Buttons" md-padding="10px 0 10px 0">
			<Override
				slot="SectionContent"
				md-width="100%"
				md-height="auto"
				md-min-height="250px"
				md-padding="20px 20px 20px 20px"
				md-flex-wrap="wrap"
				md-flex-direction="row"
				md-align-items="flex-start"
				md-justify-content="space-between"
			/>
			<Components.StickerButton>
				Стикер 1
			</Components.StickerButton>
			<Components.StickerButton>
				Стикер 2
			</Components.StickerButton>
			<Components.StickerButton>
				Стикер 3
			</Components.StickerButton>
			<Components.StickerButton>
				Стикер 4
			</Components.StickerButton>
			<Components.StickerButton>
				Стикер 5
			</Components.StickerButton>
			<Components.StickerButton>
				Стикер 6
			</Components.StickerButton>
		</Section>
		<Section quarkly-title="FooterSection">
			<Box display="flex" justify-content="space-between">
				<Box quarkly-title="AudioSticker">
					<Image width="35px" height="35px" src="https://uploads.quarkly.io/6056093da1e3530020715a39/images/68747470733a2f2f63646e2e73686f706966792e636f6d2f732f66696c65732f312f313036312f313932342f70726f64756374732f5370656563685f427562626c655f456d6f6a695f6c617267652e706e673f763d31343830343831303632.webp?v=2021-03-21T08:02:58.740Z" />
				</Box>
				<Components.BroadcastButton
					sm-box-shadow="--podcasterShadow"
					height="42px"
					width="150px"
					background="#fff"
					box-shadow="--shadow"
				>
					<Override
						slot="box"
						height="30px"
						width="80px"
						margin="6px 0px 5px 4px"
						box-shadow="--shadow"
						background="#ffd439"
					/>
				</Components.BroadcastButton>
				<Box quarkly-title="Sticker">
					<Image
						width="35px"
						height="35px"
						src="https://uploads.quarkly.io/6056093da1e3530020715a39/images/63d38d8cbba4335a6d28b5e19f67be8d.png?v=2021-03-21T07:56:14.568Z"
						sm-width="30px"
						sm-height="30px"
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