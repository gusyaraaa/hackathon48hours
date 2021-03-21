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
			<Text font="600 28px sans-serif">
				Мои подписки
			</Text>
			<Box quarkly-title="Container">
				<Box
					sm-width="162px"
					sm-height="auto"
					sm-background="#ffffff"
					quarkly-title="Card"
					sm-display="flex"
					sm-flex-direction="column"
					md-width="220px"
					lg-width="300px"
					lg-height="auto"
					width="350px"
					height="auto"
					position="relative"
				>
					<Box
						quarkly-title="Image"
						sm-width="162px"
						sm-height="162px"
						sm-border-radius="25%"
						sm-margin="0px 0px 10px 0px"
						md-height="220px"
						md-border-radius="25%"
						lg-height="300px"
						lg-border-radius="20%"
						height="200px"
						border-radius="20%"
						background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2064.png?v=2021-03-21T00:17:18.652Z) -5px/115% no-repeat"
						lg-background="--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2064.png?v=2021-03-21T00:17:18.652Z) -5px/110% no-repeat"
						md-background="--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2065.png?v=2021-03-21T00:17:18.651Z) -5px/115% no-repeat"
						sm-background="--color-background url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2068.png?v=2021-03-21T00:17:18.652Z) -3px/110% no-repeat"
						width="200px"
					/>
					<Box
						quarkly-title="Texts"
						sm-display="flex"
						sm-flex-direction="column"
						sm-justify-content="start"
						sm-align-items="flex-start"
					>
						<Text
							sm-height="15px"
							sm-font="normal 12px sans-serif"
							sm-text-align="left"
							quarkly-title="Name's podcaster"
							sm-margin="0 0px 0 0px"
							sm-border-color="#4d4d4d"
							sm-color="--fontGray"
							md-font="14px sans-serif"
							md-min-height="10px"
							lg-min-height="14px"
							min-height="18ox"
							font="20px sans-serif"
							color="--fontGray"
						>
							Так вышло{"\n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
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