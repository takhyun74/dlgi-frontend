// @ts-nocheck
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, NavLink } from "reactstrap";
// core components

function CrewHeader() {
  let pageHeader = React.createRef();
  const [arrowDisplayYn, setArrowDisplayYn] = React.useState("");

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        // let windowScrollTop = window.pageYOffset / 3;
        // pageHeader.current.style.transform =
        //   "translate3d(0," + windowScrollTop + "px,0)";
        if (
          document.documentElement.scrollTop > 0 ||
          document.body.scrollTop > 0
        ) {
          //setArrowDisplayYn("none");
        } else if (
          document.documentElement.scrollTop < 200 ||
          document.body.scrollTop < 200
        ) {
          //setArrowDisplayYn("");
        }
      };

      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header clear-filter crew-header-background-img"
        id="div_CrewHeader"
      >
        <div ref={pageHeader}></div>

        <Container>
          <div className="index-header-main-area">
            <div className="crew-header-flex-sub-01">
              <h1 className="font-size-5em color-white crew-header-font-smth">
                러닝, 그 이상의
              </h1>
              <h1 className="font-size-5em color-white crew-header-font-smth">
                문화를 만들어 갑니다.
              </h1>
            </div>

            <img
              className="header-arrow"
              style={{ display: `${arrowDisplayYn}` }}
              src={require("../../assets/img/arrow.gif").default}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("div_CrewSection01").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            ></img>
          </div>
        </Container>
        <div className="crew-header-gradation-img"></div>
      </div>
    </>
  );
}

export default CrewHeader;
