import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Button, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
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
		<Section quarkly-title="Bio">
			<Override slot="SectionContent" width="100%" padding="0px 20px 0px 20px" />
			<Image width="64px" height="64px" quarkly-title="Avatar" />
			<Box>
				<Text quarkly-title="Name">
					Some text
				</Text>
				<Text quarkly-title="id">
					Some text
				</Text>
				<Button quarkly-title="Buy Subscribe">
					Button
				</Button>
			</Box>
		</Section>
		<Section quarkly-title="My tags">
			<Override slot="SectionContent" width="100%" padding="0px 20px 0px 20px" />
			<Text font="600 28px sans-serif">
				Мои теги
			</Text>
			<Box
				quarkly-title="Container"
				display="flex"
				width="100%"
				justify-content="space-around"
				flex-wrap="wrap"
				lg-justify-content="space-between"
				sm-justify-content="space-between"
				sm-flex-wrap="wrap"
			>
				<Components.Tag md-margin="0px 10px 0px 0px">
					<Override slot="text" border-color="--color-purpleTag" color="--purpleTag">
						Урбанистика
					</Override>
				</Components.Tag>
				<Components.Tag md-margin="0px 10px 0px 0px">
					<Override slot="text" />
				</Components.Tag>
				<Components.Tag md-margin="0px 10px 0px 0px">
					<Override slot="text" color="--darkPurpleTag">
						Физика
					</Override>
				</Components.Tag>
				<Components.Tag md-margin="0px 10px 0px 0px">
					<Override slot="text" color="--yellowTag">
						Интеллектуальная помощь
					</Override>
				</Components.Tag>
				<Components.Tag md-margin="0px 10px 0px 0px">
					<Override slot="text" color="--redTag">
						История
					</Override>
				</Components.Tag>
			</Box>
		</Section>
		<Section quarkly-title="Following">
			<Override slot="SectionContent" width="100%" padding="0px 20px 0px 20px" />
			<Text font="600 28px sans-serif">
				Мои подписки
			</Text>
			<Box quarkly-title="Container" display="flex" width="100%" justify-content="space-around">
				<Components.FollowerCard />
				<Components.FollowerCard>
					<Override slot="text">
						KUJ-podcast
					</Override>
					<Override
						slot="box"
						background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%20708.png?v=2021-03-21T03:08:17.607Z) -5px/120% no-repeat"
						lg-background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%20708.png?v=2021-03-21T03:08:17.607Z) -5px/120% no-repeat"
						md-background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%20708.png?v=2021-03-21T03:08:17.607Z) -5px/120% no-repeat"
						sm-background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%20708.png?v=2021-03-21T03:08:17.607Z) -5px/120% no-repeat"
					/>
				</Components.FollowerCard>
				<Components.FollowerCard>
					<Override slot="text">
						Одно расстройство
					</Override>
					<Override
						slot="box"
						background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%20709.png?v=2021-03-21T03:08:17.611Z) -5px/120% no-repeat"
						lg-background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%20709.png?v=2021-03-21T03:08:17.611Z) -5px/120% no-repeat"
						md-background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%20709.png?v=2021-03-21T03:08:17.611Z) -5px/120% no-repeat"
						sm-background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%20709.png?v=2021-03-21T03:08:17.611Z) -5px/120% no-repeat"
					/>
				</Components.FollowerCard>
				<Components.FollowerCard>
					<Override slot="text">
						Так вышло
					</Override>
					<Override
						slot="box"
						background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2068.png?v=2021-03-21T00:17:18.652Z) -5px/110% no-repeat"
						lg-background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2068.png?v=2021-03-21T00:17:18.652Z) -5px/110% no-repeat"
						md-background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2068.png?v=2021-03-21T00:17:18.652Z) 0/110% no-repeat"
						sm-background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2068.png?v=2021-03-21T00:17:18.652Z) 0/110% no-repeat"
					/>
				</Components.FollowerCard>
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