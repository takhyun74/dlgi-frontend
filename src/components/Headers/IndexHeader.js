/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, NavLink } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();
  const [arrowDisplayYn, setArrowDisplayYn] = React.useState("");

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
        if (
          document.documentElement.scrollTop > 0 ||
          document.body.scrollTop > 0
        ) {
          setArrowDisplayYn("none");
        } else if (
          document.documentElement.scrollTop < 200 ||
          document.body.scrollTop < 200
        ) {
          setArrowDisplayYn("");
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
        className="page-header clear-filter"
        filter-color="blue"
        style={{
          backgroundImage:
            "linear-gradient( rgba(256, 255, 255, 0.65), rgba(256, 256, 256, 0) ),url(" +
            require("../../assets/img/dlgi-header.jpg").default +
            ")",
          backgroundSize: "120% 105%",
        }}
      >
        <div className="index-header-gradation-img" ref={pageHeader}></div>

        <Container>
          <div className="index-header-main-area">
            <div className="index-header-flex-sub-01">
              {/* <img
                alt="..."
                className="n-logo spin index-header-main-img"
                src={require("../../assets/img/three-dalli.png").default}
                style={{ width: "170px" }}
              ></img> */}
              <h1 className="font-size-5em color-black">마지막 한 걸음 까지</h1>
              <h1 className="font-size-5em color-black">멋지게 완주</h1>
              {/* <h1 className="main-font-eng color-black">DALLIGETIT</h1> */}
              <Button
                className="btn-round"
                color="info"
                style={{
                  fontSize: "30px",
                  fontWeight: "600",
                  padding: "10px 30px 10px 30px",
                }}
              >
                정기런 신청하기
              </Button>
              {/* <img
                alt="..."
                className="n-logo index-header-main-img"
                src={require("../../assets/img/dalli-pixel.png").default}
                style={{
                  position: "relative",
                  top: "160px",
                  display: "inherit",
                  zIndex: "-1",
                }}
              ></img>
              <img
                alt="..."
                className="n-logo index-header-main-img"
                src={require("../../assets/img/new-logo-pixel.png").default}
                style={{
                  position: "relative",
                  bottom: "500px",
                  display: "inherit",
                  zIndex: "-1",
                }}
              ></img> */}
            </div>

            <img
              className="index-header-arrow"
              style={{ display: `${arrowDisplayYn}` }}
              src={require("../../assets/img/arrow.gif").default}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("div_Section01").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            ></img>
          </div>

          {/* <NavLink
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("basic-elements").scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }}
          >
            <i className="now-ui-icons info arrows-1_minimal-down arrow-footer"></i>
          </NavLink> */}
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
