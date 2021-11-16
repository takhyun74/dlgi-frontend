import React from 'react';
import { Switch, Route } from 'react-router-dom';


// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import LoginPage from 'pages/Login';
import ProfilePage from 'pages/Profile';
import LandingPage from 'pages/Landing';

const App = () => {

  // axios.get(process.env.ENDPOINT + '/common/component/device/category')
  // .then(res => {
  //   this.categoryData = res.data;
  // })
  // .catch(err => {
  //   this.$eventHub.$emit('showError', err)
  // });

  return (
    <Switch>
        {/* <Route path="/" exact={true} component={Home} /> */}
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" component={LandingPage} />

      </Switch>

  );
}

export default App;

