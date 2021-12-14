/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
// core components

const strMainTitle = "마지막 한 걸음까지 멋지게 완주\nwearedalligetit";

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div className="page-header-image" ref={pageHeader}></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("../../assets/img/three-dalli.png").default}
            ></img>
            {/* <h1 className="h1-seo"> */}
            {/* <h1>
              {strMainTitle.split("\n").map((i, key) => {
                return <div key={key}>{i}</div>;
              })}
            </h1> */}
            <h1>wearedalligetit</h1>
            <Button color="info">정기런 신청하기</Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
