import React from "react";
import Index from "pages/index";
import Live from "pages/live";
import Livebroadcast from "pages/livebroadcast";
import Livebroadcastmembers from "pages/livebroadcastmembers";
import Createbroadcast from "pages/createbroadcast";
import Profile from "pages/profile";
import Livebroadcast1 from "pages/livebroadcast1";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/live' component={Live}/>
			<Route exact path='/livebroadcast' component={Livebroadcast}/>
			<Route exact path='/livebroadcastmembers' component={Livebroadcastmembers}/>
			<Route exact path='/createbroadcast' component={Createbroadcast}/>
			<Route exact path='/profile' component={Profile}/>
			<Route exact path='/livebroadcast1' component={Livebroadcast1}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
