import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image } from "@quarkly/widgets";
const defaultProps = {
	"href": "/index",
	"width": "64px",
	"height": "64px",
	"src": "https://uploads.quarkly.io/6056093da1e3530020715a39/images/5.svg?v=2021-03-21T07:26:15.829Z",
	"md-margin": "0px 0px 0px -10px"
};
const overrides = {};

const BackArrow = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <a href="/index">
		<Image {...rest} />
	</a>;
};

Object.assign(BackArrow, { ...Image,
	defaultProps,
	overrides
});
export default BackArrow;