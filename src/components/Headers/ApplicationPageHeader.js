// @ts-nocheck

import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function ProfilePageHeader() {
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
      <div 
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/dlgi-application-header.jpg").default + ")",
            
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container" style={{visibility: "hidden"}}>
            {/* <img alt="..." src={require("assets/img//ryan.jpg").default}></img> */}
          </div>
          <h3 className="title">D A L L I G E T I T</h3>
          <p className="category">정기런 참석현황</p>
          <div className="content" style={{paddingBottom:"20px"}}>
            <div className="social-description">
              <h2>26</h2>
              <p>일반</p>
            </div>
            <div className="social-description">
              <h2>26</h2>
              <p>크루원</p>
            </div>
            <div className="social-description">
              <h2>48</h2>
              <p>전체</p>
            </div>
          </div>

          <div className="content">
              <span>장소 : </span>
              <span>보라매공원</span>
          </div>
          <div className="content">
              <span>날짜 : </span>
              <span>2022-02-21 (화)</span>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
