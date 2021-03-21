import React from "react";
import theme from "theme";
import { Theme, Link, Box, Image, Input, Icon, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdSearch } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="HeaderSection" lg-border-color="#000000" background="#fcfcfc" margin="0 0 0 0">
			<Box margin="50px 0px 0px 15px" quarkly-title="HeaderTitleBox" />
			<Image width="250px" height="64px" src="https://uploads.quarkly.io/6056093da1e3530020715a39/images/Podcaster.svg?v=2021-03-20T23:07:58.108Z" />
		</Section>
		<Section quarkly-title="SearchSection" background="--color-background" margin="0 0 0 0">
			<Box quarkly-title="SearchBox" display="flex" max-width="max-content">
				<Input
					width="1260px"
					height="60px"
					background="#ffffff"
					border-color="#ffffff"
					border-radius="15px"
					box-shadow="--shadow"
				/>
				<Icon
					category="md"
					icon={MdSearch}
					min-height="100%"
					width="60px"
					color="--shadowActivePodcaster"
				/>
			</Box>
		</Section>
		<Section
			quarkly-title="BodySection"
			color="--fontGray"
			font="--text"
			background="--color-background url()"
			padding="24px 0 150px 0"
		>
			<Override slot="SectionContent" />
			<Box
				quarkly-title="NearestPodcasts"
				margin="0px 0px 10px 0px"
				md-margin="0px 0px 80px 0px"
				display="block"
				flex-wrap="wrap"
				justify-content="space-between"
			>
				<Text quarkly-title="Title" font="--t1" color="--black" sm-font="--t4">
					Ближайшие подкасты
				</Text>
				<Stack
					sm-flex-wrap="nowrap"
					sm-justify-content="space-between"
					md-justify-content="space-between"
					md-flex-wrap="nowrap"
					justify-content="space-between"
					flex-wrap="nowrap"
					sm-padding="0px 10px 0px 10px"
				>
					{"    "}
					<StackItem
						display="flex"
						sm-padding="16px 0 16px 0"
						width="auto"
						min-width="350px"
						sm-min-width="170px"
						md-min-width="250px"
					>
						<Override slot="StackItemContent" />
						<Components.CardWithTime display="block" flex-direction="column">
							<Override
								slot="box1"
								background="rgba(0, 0, 0, 0.02) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Subtract.svg?v=2021-03-21T00:44:33.775Z) 0% 0% /100% no-repeat scroll padding-box"
								height="110%"
								border-radius="0%"
								justify-content="center"
							/>
							<Override slot="text2" font="--text">
								Сказки про людей{"\n\n"}
							</Override>
							<Override slot="text1" font="--t2" sm-font="--t3">
								Малиновый пирог
							</Override>
							<Override slot="text" margin="50px 0px 0px 0px" max-height="100%">
								19 марта 12:00
							</Override>
						</Components.CardWithTime>
						{"        "}{"    "}
					</StackItem>
					{"    "}
					<StackItem
						display="flex"
						sm-padding="16px 0 16px 0"
						width="auto"
						min-width="350px"
						sm-min-width="170px"
						md-min-width="250px"
						justify-content="center"
						flex-direction="column"
					>
						<Components.CardWithTime display="block" flex-direction="column">
							<Override
								slot="box1"
								background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Subtract.svg?v=2021-03-21T00:44:33.775Z) 0% 0% /100% no-repeat scroll padding-box"
								height="110%"
								border-radius="0%"
								justify-content="center"
							/>
							<Override slot="text2" font="--text">
								Сказки про людей{"\n\n"}
							</Override>
							<Override slot="text1" font="--t2" sm-font="--t3">
								Малиновый пирог
							</Override>
							<Override slot="text" margin="50px 0px 0px 0px" max-height="100%">
								19 марта 12:00
							</Override>
						</Components.CardWithTime>
						{"        "}{"    "}
					</StackItem>
					<StackItem
						display="flex"
						sm-padding="16px 0 16px 0"
						md-overflow-x="hidden"
						width="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						min-width="350px"
						lg-display="none"
						sm-min-width="170px"
						md-min-width="250px"
					>
						<Components.CardWithTime>
							<Override
								slot="box1"
								background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Subtract.svg?v=2021-03-21T00:44:33.775Z) 0% 0% /100% no-repeat scroll padding-box"
								height="110%"
								border-radius="0%"
								justify-content="center"
							/>
							<Override slot="text2" font="--text">
								Музы
							</Override>
							<Override slot="text1" font="--t2">
								Нейросети и художники
							</Override>
							<Override slot="text" margin="50px 0px 0px 0px">
								11 марта 12:30
							</Override>
						</Components.CardWithTime>
						{"        "}{"    "}
					</StackItem>
				</Stack>
			</Box>
			<Box
				quarkly-title="TopWeekPodcasters"
				margin="0px 0px 10px 0px"
				md-margin="0px 0px 80px 0px"
				flex-wrap="wrap"
				display="block"
				justify-content="space-between"
			>
				<Text quarkly-title="Title" font="--t1" color="--black" sm-font="--t4">
					Лучшие эфиры
				</Text>
				<Box>
					<Stack
						sm-flex-wrap="nowrap"
						sm-justify-content="space-between"
						md-justify-content="space-between"
						md-flex-wrap="nowrap"
						justify-content="space-between"
						flex-wrap="nowrap"
						sm-padding="0px 10px 0px 10px"
					>
						{"    "}
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							width="auto"
							min-width="350px"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Override slot="StackItemContent" />
							<Components.Card>
								<Override slot="box" />
								<Override slot="box1" box-shadow="--shadow" sm-background="--color-filterImage url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/200x200%20(1).jfif?v=2021-03-21T12:06:36.452Z)" />
								<Override slot="text" font="--t2" color="--black" sm-font="450 14px --fontFamily-googleRoboto">
									Что делать, если ваш партнёр вербальный агрессор?{"\n\n"}
								</Override>
								<Override slot="text1" font="--text" sm-margin="20px 0px 0 0px" />
							</Components.Card>
							{"        "}{"    "}
						</StackItem>
						{"    "}
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							width="auto"
							min-width="350px"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Components.Card>
								<Override slot="text" font="--t2" color="--black" sm-font="--t3">
									Время от времени{"\n\n"}
								</Override>
								<Override slot="text1" color="--fontGray" font="--text">
									Слава Комиссаренко{"\n\n"}
								</Override>
								<Override slot="box" background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2065.png?v=2021-03-21T00:17:18.651Z) -5px/115% no-repeat" />
								<Override slot="box1" background="--color-filterImage url(https://avatars.yandex.net/get-music-content/2441215/443513eb.a.11535049-1/m1000x1000) 0% 0%/contain no-repeat" box-shadow="--shadow" />
							</Components.Card>
							{"        "}{"    "}
						</StackItem>
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							md-overflow-x="hidden"
							width="auto"
							overflow-x="hidden"
							overflow-y="hidden"
							min-width="350px"
							lg-display="none"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Components.Card>
								<Override slot="text" font="--t2" color="--black">
									Что делать, если ваш партнёр вербальный агрессор?
								</Override>
								<Override slot="text1" color="--fontGray" font="--text">
									Психология на Дожде{"\n\n"}
								</Override>
								<Override slot="box" background="rgb(85, 85, 85) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/200x200.png?v=2021-03-21T00:33:15.864Z) 0% 0% /100% no-repeat scroll padding-box" />
								<Override slot="box1" background="--color-filterImage url(https://avatars.yandex.net/get-music-content/2383988/95c11dc9.a.9091989-1/m1000x1000) 0% 0%/contain no-repeat" box-shadow="--shadow" />
							</Components.Card>
							{"        "}{"    "}
						</StackItem>
					</Stack>
				</Box>
			</Box>
			<Box
				quarkly-title="BestLive"
				margin="0px 0px 10px 0px"
				md-margin="0px 0px 80px 0px"
				display="block"
				flex-wrap="wrap"
				justify-content="space-between"
			>
				<Text quarkly-title="Title" font="--t1" color="--black" sm-font="--t4">
					Подкастеры недели
				</Text>
				<Box>
					<Stack
						sm-flex-wrap="nowrap"
						sm-justify-content="space-between"
						md-justify-content="space-between"
						md-flex-wrap="nowrap"
						justify-content="space-between"
						flex-wrap="nowrap"
						sm-padding="0px 10px 0px 10px"
					>
						{"    "}
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							width="auto"
							min-width="350px"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Override slot="StackItemContent" />
							<Components.Card>
								<Override slot="text" font="--t2" color="--black" sm-font="--t3">
									Самые честные новости{"\n\n"}
								</Override>
								<Override slot="text1" color="--fontGray" font="--text">
									Артемий Лебедев
								</Override>
								<Override slot="box1" background="--color-filterImage url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/200x200.jfif?v=2021-03-21T11:57:49.182Z) center/contain no-repeat" box-shadow="--shadow" />
							</Components.Card>
							{"        "}{"    "}
						</StackItem>
						{"    "}
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							width="auto"
							min-width="350px"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Components.Card>
								<Override slot="text" font="--t2" color="--black" sm-font="--t3">
									Чай с психологом{"\n\n"}
								</Override>
								<Override slot="text1" color="--fontGray" font="--text">
									Студия Подкастов
								</Override>
								<Override slot="box" background="rgb(85, 85, 85) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/200x200%20(1).png?v=2021-03-21T00:42:52.986Z) 0% 0% /auto repeat scroll padding-box" />
								<Override slot="box1" background="--color-filterImage url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/m1000x1000.jfif?v=2021-03-21T12:00:35.049Z) center/contain no-repeat" box-shadow="--shadow" />
							</Components.Card>
							{"        "}{"    "}
						</StackItem>
						<StackItem
							display="flex"
							sm-padding="16px 0 16px 0"
							md-overflow-x="hidden"
							width="auto"
							overflow-x="hidden"
							overflow-y="hidden"
							min-width="350px"
							lg-display="none"
							sm-min-width="170px"
							md-min-width="250px"
						>
							<Components.Card>
								<Override slot="text" font="--t2" color="--black">
									БЕЗ ДУШИ{"\n\n"}
								</Override>
								<Override slot="text1" color="--fontGray" font="--text">
									Данила Поперечный
								</Override>
								<Override slot="box" background="rgb(85, 85, 85) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/200x200.png?v=2021-03-21T00:40:46.426Z) 0% 0% /100% no-repeat scroll padding-box" />
								<Override slot="box1" background="--color-filterImage url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/m1000x1000.png?v=2021-03-21T12:02:30.849Z) 0% 0%/contain no-repeat" box-shadow="--shadow" />
							</Components.Card>
							{"        "}{"    "}
						</StackItem>
					</Stack>
				</Box>
			</Box>
		</Section>
		<Components.NavBar margin="0 0 0 0">
			<Override slot="box1" />
			<Override slot="link2" box-shadow="--shadow" />
			<Override slot="link1" width="50px" height="50px" />
			<Override slot="SectionContent" />
			<Override
				slot="link"
				hover-opacity="1"
				cursor="default"
				width="50px"
				height="50px"
			/>
			<Override slot="link3" width="50px" height="50px" />
			<Override slot="box" box-shadow="--shadow" />
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