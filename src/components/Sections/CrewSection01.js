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

const CrewSection01 = () => {
  React.useEffect(() => {
    //Nothing to do.
  });
  return (
    <>
      <div
        className="crew-section01-background-img"
        id="div_CrewSection01"
        style={{
          padding: "250px 0 165px 0",
        }}
      >
        <Container>
          <div className="height-100">
            <div className="sec02-contents-area">
              <div className="section-title-area">
                <div className="crew-section-sub-title">
                  달리기릿은 기존 문화 속에 안주하지 않고,
                </div>
                <div className="crew-section-sub-title">
                  새로운 문화를 만듭니다.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CrewSection01;
