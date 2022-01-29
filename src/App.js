// @ts-nocheck

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// styles for Customize Main page
import "assets/css/dlgi_main.css";

import LoginPage from 'pages/Login';
import ProfilePage from 'pages/Profile';
import LandingPage from 'pages/Landing';
import MainPage from 'pages/Main';

const tokenState = {
  authenticated: false,
  accessToken: null,
  refreshToken: null
} // 토큰 관리 ==> useReducer 사용 예정 

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact={true} component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/langding" component={LandingPage} />
      </Switch>
    </>
  );
};

export default App;

