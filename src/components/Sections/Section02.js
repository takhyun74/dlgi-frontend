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
  // @ts-ignore
} from "reactstrap";

const Section02 = () => {
  const ElContents = [
    {
      idx: 1,
      elType: "div",
      className: "section-title",
      string: "달리기릿의 달리기",
    },
    {
      idx: 2,
      elType: "div",
      className: "section-sub-title",
      string: "'달리기' 그리고",
    },
    {
      idx: 3,
      elType: "div",
      className: "section-sub-title",
      string: "'LET'S GET IT'",
    },
    {
      idx: 4,
      elType: "p",
      className: "section-desc",
      string: "우리가 함께할 달리기릿은 그렇게 탄생했습니다.",
    },
  ];
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
                {ElContents.filter(
                  (obj) => obj.className === "section-title"
                ).map((obj) => (
                  <div className={obj.className} key={obj.idx}>
                    {obj.string}
                  </div>
                ))}
                {ElContents.filter(
                  (obj) => obj.className === "section-sub-title"
                ).map((obj) => (
                  <div className={obj.className} key={obj.idx}>
                    {obj.string}
                  </div>
                ))}
                {/* <div className="section-title">달리기릿의 달리기</div>
                <div className="section-sub-title">'달리기' 그리고</div>
                <div className="section-sub-title">'LET'S GET IT'</div> */}
              </div>
              <div>
                <div className="section-right-img-area">
                  <img
                    className="sec02-img"
                    alt="..."
                    src={require("../../assets/img/sec02-01.jpg").default}
                  ></img>
                </div>
                <div className="section-left-img-area">
                  <img
                    className="sec02-img"
                    alt="..."
                    src={require("../../assets/img/sec02-02.jpg").default}
                  ></img>
                </div>
              </div>
              {ElContents.filter((obj) => obj.elType === "p").map((obj) => (
                <div className={obj.className} key={obj.idx}>
                  {obj.string}
                </div>
              ))}
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

export default Section02;
