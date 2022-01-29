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

const Section03 = () => {
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
          <div className="height-100">
            <div className="sec02-contents-area">
              <div className="section-title-area">
                <div className="section-title">달리기릿의 표현방식</div>
                {/* <div className="section-sub-title">'달리기' 그리고</div>
                <div className="section-sub-title">'LET'S GET IT'</div> */}
              </div>
              <div
                style={{
                  height: "100%",
                }}
              >
                <div className="section-right-img-area">
                  <p className="sec03-sub-title">러닝의 본질적인 가치와 멋을</p>
                  <p className="sec03-sub-title">
                    달리기릿만의 표현방식으로 재해석 합니다.
                  </p>
                  <img
                    className="sec02-img"
                    // style={{ height: "70%" }}
                    alt="..."
                    src={require("../../assets/img/sec03-02.jpg").default}
                  ></img>
                </div>
                <div className="section-left-img-area">
                  <img
                    className="sec02-img"
                    style={{ height: "50%" }}
                    alt="..."
                    src={require("../../assets/img/sec03-01.jpg").default}
                  ></img>
                  <p
                    className="sec03-sub-title"
                    style={{
                      padding: "50px 0px 0px 0px",
                    }}
                  >
                    우리는 러닝과 새로운 예술 행위를 혼합하며
                  </p>
                  <p className="sec03-sub-title">
                    우리만의 새로운 형태의 러닝문화를 만들어 가길 원합니다.
                  </p>
                </div>
              </div>
              {/* <p className="section-desc">
                우리가 함께할 달리기릿은 그렇게 탄생했습니다.
              </p> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Section03;
