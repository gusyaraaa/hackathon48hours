import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override } from "@quarkly/components";
import * as Components from "components";
import { MdArrowBack } from "react-icons/md";
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
				<Icon category="md" icon={MdArrowBack} margin="0 4pxpx 0px 0px" display="inline" />
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
				<Text quarkly-title="BroadcastTitle">
					&lt;BroadcastName&gt;
				</Text>
				<Text quarkly-title="BroadcastDescription">
					&lt;BroadcastDescription&gt;
				</Text>
				<Text
					quarkly-title="Count"
					margin="px 0px 0 0"
					display="inline"
					sm-margin="px 0px 0 4px"
					font="16px/150% sans-serif"
					color="--fontGray"
					text-align="left"
				>
					1.5к+
				</Text>
			</Box>
		</Section>
		<Section quarkly-title="BodySection" justify-content="end">
			<Override
				slot="SectionContent"
				sm-width="100%"
				sm-height="auto"
				width="100%"
				height="auto"
				min-height="1000px"
				padding="0px 30px 0px 30px"
				align-items="center"
			/>
			<Components.DonateListeners>
				<Override slot="text" />
				<Override slot="box" />
			</Components.DonateListeners>
			<Components.DonateListeners margin="0px 0px 40px 0px" lg-margin="0px 0px 30px 0px" sm-margin="0px 0px 10px 0px" md-margin="0px 0px 20px 0px">
				<Override slot="box2" font="--t2" />
				<Override slot="text" font="--t2" />
			</Components.DonateListeners>
			<Components.PlebsListener padding="30px 0px 30px 0px" lg-padding="20px 0px 20px 0px" md-padding="15px 0px 15px 0px" sm-padding="15px 0px 15px 0px">
				<Override slot="text" font="--t2" />
			</Components.PlebsListener>
			<Components.PlebsListener padding="30px 0px 30px 0px" lg-padding="20px 0px 20px 0px" md-padding="15px 0px 15px 0px" sm-padding="15px 0px 15px 0px">
				<Override slot="text" font="--t2" />
			</Components.PlebsListener>
			<Components.PlebsListener padding="30px 0px 30px 0px" lg-padding="20px 0px 20px 0px" md-padding="15px 0px 15px 0px" sm-padding="15px 0px 15px 0px">
				<Override slot="text" font="--t2" />
			</Components.PlebsListener>
		</Section>
		<Section quarkly-title="FooterSection">
			<Box height="28px">
				<Components.BroadcastButton
					max-width="50%"
					width="150px"
					height="42px"
					margin="0px auto 0px auto"
					box-shadow="--shadow"
				>
					<Override
						slot="box"
						width="80px"
						height="30px"
						box-shadow="--shadow"
						margin="4px 0px 0px 50%"
						position="relative"
						top="15%"
						background="#922bb7"
						right="3%"
					/>
				</Components.BroadcastButton>
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