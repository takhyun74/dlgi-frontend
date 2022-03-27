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

const Section01 = () => {
  const spanContents = [
    "러닝을 단순하게 달리는데 그치지 마세요.",
    "러닝은 우리 자신을 표현할 수 있는 또 다른 가치가 있습니다.",
    "달리기릿과 함께라면 당신의 러닝이 달라집니다.",
  ];

  const ElContents = [
    {
      idx: 1,
      elType: "div",
      className: "section-text",
      string: "러닝을 단순하게 달리는데 그치지 마세요.",
    },
    {
      idx: 2,
      elType: "div",
      className: "",
      string: "러닝은 우리 자신을 표현할 수 있는 또 다른 가치가 있습니다.",
    },
    {
      idx: 3,
      elType: "div",
      className: "",
      string: "달리기릿과 함께라면 당신의 러닝이 달라집니다.",
    },
  ];
  const spanClassName = "section-text";

  return (
    <>
      <div
        className="section section-basic"
        id="div_Section01"
        style={{
          background: "#f9fafb",
        }}
      >
        <Container>
          <div className="section-text-area">
            {ElContents.map((obj) => (
              <span className={spanClassName} key={obj.idx}>
                {obj.string}
              </span>
            ))}
            {/* <span className="section-text">
              러닝을 단순하게 달리는데 그치지 마세요.
            </span>
            <span className="section-text">
              러닝은 우리 자신을 표현할 수 있는 또 다른 가치가 있습니다.
            </span>
            <span className="section-text">
              달리기릿과 함께라면 당신의 러닝이 달라집니다.
            </span> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Section01;
