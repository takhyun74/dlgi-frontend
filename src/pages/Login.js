// @ts-nocheck

import React, {useState, useEffect} from "react";
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { convertToObject } from "../../node_modules/typescript/lib/typescript";

function LoginPage({ history }) {
  const [idFocus, setIdFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [user_id, setId] = useState('');
  const [password, setPassword] = useState('');

  axios.defaults.withCredentials = true;
  
  useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  
  return (
    <>
      {/* <ExamplesNavbar /> */}
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/login.jpg").default + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container" style={{visibility:'hidden'}}>
                      <img
                        alt="..."
                        src={require("assets/img/now-logo.png").default}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (idFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="ID"
                        type="text"
                        onFocus={() => setIdFocus(true)}
                        onBlur={() => setIdFocus(false)}
                        onChange={(e) => setId(e.target.value)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (passwordFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_lock-circle-open"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                        onChange={(e) => setPassword(e.target.value)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round font-weight-bold"
                      color="info"
                      onClick={() =>{ 
                        const data = { user_id, password };
                        axios.post('/login', data)
                        .then(res => {
                          if(res.data.ok) {
                            const { accessToken, refreshToken } = res.data;
                            
                            var auth = {'login_user': data.user_id, 'accessToken': accessToken, 'refreshToken': refreshToken};
                            localStorage.setItem('token', JSON.stringify(auth));

                            //axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                            //axios.defaults.headers.common['Refresh'] = refreshToken;
                            history.push("/");
                          }
                        })
                        .catch(err => {
                          alert(err.response.data.message);
                          console.log(err.response)
                        });
                      }}
                      size="lg"
                    >
                      LOGIN
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
