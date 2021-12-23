import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

const Section02 = () => {
  React.useEffect(() => {
    //Nothing to do.
  });
  return (
    <>
      <div
        className="section section-basic"
        id="div_Section02"
        style={{
          padding: "250px 0 165px 0",
        }}
      >
        <Container>
          <div className="section-title-area">
            <div className="section-title">달리기릿의 달리기</div>
            <div className="section-sub-title">달리기 그리고</div>
            <div className="section-sub-title">LET'S GET IT</div>
          </div>
          <div>
            <div className="section-right-img-area">
              <img
                alt="..."
                src={require("../../assets/img/dlgi_newLogo.jpg").default}
              ></img>
            </div>
            <div className="section-left-img-area">
              <img
                alt="..."
                src={require("../../assets/img/dlgi_newLogo.jpg").default}
              ></img>
            </div>
          </div>
          <p className="section-desc">
            우리가 함께할 달리기릿은 그렇게 탄생했습니다.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Section02;
