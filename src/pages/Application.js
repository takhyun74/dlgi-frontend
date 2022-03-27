// @ts-nocheck

import React from "react";
import {useLocation} from "react-router";

// reactstrap components
import {
  Container,
  Form,
  FormGroup,
  Input,
  FormText,
  Button,
  Col,
  Row,
} from "reactstrap";


import IndexNavbar from "components/Navbars/IndexNavbar.js";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ApplicationPageHeader from "components/Headers/ApplicationPageHeader.js";

function ApplicationPage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);


  const location = useLocation();
  const user = location.state.user;
  console.log(user);

  return (
    <>
      <IndexNavbar fontColor={"#ffffff"} />
      <div className="wrapper">
        <ApplicationPageHeader />
        <div className="section">
          <Container>
            <h3 className="title">정기런 신청 양식</h3>
            <h5 className="description">
              정기런 신청서 입니다. 아래의 항목들을 기재해주세요.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <Form>
                  <FormGroup>
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <Input id="exampleFormControlInput1" placeholder="name@example.com" type="email"></Input>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <Input id="exampleFormControlInput1" placeholder="name@example.com" type="email"></Input>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <Input id="exampleFormControlInput1" placeholder="name@example.com" type="email"></Input>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <Input id="exampleFormControlInput1" placeholder="name@example.com" type="email"></Input>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <Input id="exampleFormControlInput1" placeholder="name@example.com" type="email"></Input>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <Input id="exampleFormControlInput1" placeholder="name@example.com" type="email"></Input>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <Input id="exampleFormControlInput1" placeholder="name@example.com" type="email"></Input>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <Input id="exampleFormControlInput1" placeholder="name@example.com" type="email"></Input>
                  </FormGroup>
                  
                </Form>
              </Col>
              {/* 
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg1.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg").default}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg").default}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg11.jpg").default}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg").default}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg").default}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg").default}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent> */}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ApplicationPage;
