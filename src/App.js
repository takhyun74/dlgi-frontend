// @ts-nocheck

import React, {useReducer} from 'react';
import { Switch, Route } from 'react-router-dom';

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import LoginPage from 'pages/Login';
import ProfilePage from 'pages/Profile';
import LandingPage from 'pages/Landing';

  // axios.get(process.env.ENDPOINT + '/common/component/device/category')
  // .then(res => {
  //   this.categoryData = res.data;
  // })
  // .catch(err => {
  //   this.$eventHub.$emit('showError', err)
  // });
  
// const TokenState = {
//   authenticated: false,
//   token: null
// }

// const reducer(state, action) => {
//   switch(action.type) {
//       case 'SET_TOKEN':
//           return {...state, token: action.token, authenticated: action.result};
//       default:
//           return state;
//   }
// }

function App() {
  // const [state, dispatch] = useReducer(reducer, TokenState);
  // const { authenticated } = state;

  // function handleLogin(id, password) {
  //   let token = auth.login(id, password);

  //   if (token) {
  //     console.log('로그인 성공!');
  //     dispatch({
  //       type: 'SET_TOKEN',
  //       token: token,
  //       result: true,
  //     });
  //   } else {
  //     console.log('로그인 실패');
  //     dispatch({
  //       type: 'SET_TOKEN',
  //       token: null,
  //       result: false,
  //     });
  //   }
  // }

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

