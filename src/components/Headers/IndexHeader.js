/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, NavLink } from "reactstrap";
// core components

const strMainTitle = "마지막 한 걸음까지 멋지게 완주\nwearedalligetit";

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
      <div className="page-header clear-filter" filter-color="blue">
        <div className="page-header-image" ref={pageHeader}></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo spin"
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

          <i
            className="now-ui-icons info arrows-1_minimal-down arrow-footer"
            style={{ display: `${arrowDisplayYn}` }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("basic-elements").scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }}
          ></i>

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
