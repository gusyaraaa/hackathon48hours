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
					box-shadow="3px 4px 10px 0 rgba(229, 235, 252, 0.5)"
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
			background="--color-background"
			padding="24px 0 150px 0"
		>
			<Override slot="SectionContent" />
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
			<Box
				quarkly-title="NearestPodcasts"
				margin="0px 0px 10px 0px"
				md-margin="0px 0px 80px 0px"
				display="block"
				flex-wrap="wrap"
				justify-content="space-between"
			>
				<Text quarkly-title="Title" font="--t1" color="--black">
					Ближайшие подкасты
				</Text>
				<Box display="flex" flex-wrap="wrap" justify-content="space-between">
					<Components.TestCard imgURL="https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2069.png?v=2021-03-21T00:17:18.655Z">
						<Override slot="box" background="url() center /100% no-repeat" />
					</Components.TestCard>
					<Components.TestCard>
						<Override slot="box" background="url(https://images.unsplash.com/photo-1612831197630-ba9be548f9a9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center /100% no-repeat" />
					</Components.TestCard>
					<Components.TestCard />
				</Box>
			</Box>
			<Box
				quarkly-title="TopWeekPodcasters"
				margin="0px 0px 10px 0px"
				md-margin="0px 0px 80px 0px"
				flex-wrap="wrap"
				display="block"
				justify-content="space-between"
			>
				<Text quarkly-title="Title" font="--t1" color="--black">
					Лучшие эфиры
				</Text>
				<Box display="flex" flex-wrap="wrap" justify-content="space-between">
					<Components.TestCard imgURL="https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.depositphotos.com%2Fstock-photos%2F%25D0%25B8%25D0%25BD%25D1%2582%25D0%25B5%25D1%2580%25D0%25BD%25D0%25B5%25D1%2582.html&psig=AOvVaw2msynKMEXcHFgpNemUqssR&ust=1616411962866000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICM6_ihwe8CFQAAAAAdAAAAABAD" />
					<Components.TestCard />
					<Components.TestCard />
				</Box>
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
								<Override slot="box1" />
								<Override slot="text" font="--t2" color="--black" sm-font="450 14px --fontFamily-googleRoboto" />
								<Override slot="text1" font="--text" />
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
									Потому что нельзя!
								</Override>
								<Override slot="text1" color="--fontGray" font="--text">
									Максим Кац
								</Override>
								<Override slot="box" background="#ffffff url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/Rectangle%2065.png?v=2021-03-21T00:17:18.651Z) -5px/115% no-repeat" />
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
									Горящая изба
								</Override>
								<Override slot="box" background="rgb(85, 85, 85) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/200x200.png?v=2021-03-21T00:33:15.864Z) 0% 0% /100% no-repeat scroll padding-box" />
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
				<Text quarkly-title="Title" font="--t1" color="--black">
					Подкастеры недели
				</Text>
				<Box display="flex" flex-wrap="wrap" justify-content="space-between">
					<Components.TestCard />
					<Components.TestCard />
					<Components.TestCard />
				</Box>
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
									Как варить варенье на огне
								</Override>
								<Override slot="text1" color="--fontGray" font="--text">
									Мария Федотова
								</Override>
								<Override slot="box1" background="--color-filterImage url()" />
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
									Что будет если крикнуть в окно
								</Override>
								<Override slot="text1" color="--fontGray" font="--text">
									Студия Подкастов
								</Override>
								<Override slot="box" background="rgb(85, 85, 85) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/200x200%20(1).png?v=2021-03-21T00:42:52.986Z) 0% 0% /auto repeat scroll padding-box" />
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
									Политика и искусство
								</Override>
								<Override slot="text1" color="--fontGray" font="--text">
									LABELSMART{"\n\n"}
								</Override>
								<Override slot="box" background="rgb(85, 85, 85) url(https://uploads.quarkly.io/6056093da1e3530020715a39/images/200x200.png?v=2021-03-21T00:40:46.426Z) 0% 0% /100% repeat scroll padding-box" />
							</Components.Card>
							{"        "}{"    "}
						</StackItem>
					</Stack>
				</Box>
			</Box>
		</Section>
		<Components.NavBar margin="0 0 0 0">
			<Override slot="box1" />
			<Override slot="link2" />
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