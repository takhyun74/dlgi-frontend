// @ts-nocheck

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/scss/dlgi-style.scss";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// styles for Customize Main page
import "assets/css/dlgi_main.css";

import LoginPage from "pages/Login";
import ProfilePage from "pages/Profile";
import LandingPage from "pages/Landing";
import MainPage from "pages/Main";
import ApplicationPage from 'pages/Application';
import IntroduceDlgi from "pages/IntroduceDlgi.js";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/home" exact={true} component={MainPage} />
        <Route path="/dlgicrew" component={IntroduceDlgi} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/langding" component={LandingPage} />
        <Route path="/application" component={ApplicationPage} />
        <Redirect to="/home" />
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
};

export default App;
