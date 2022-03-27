import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import CrewNavbar from "components/Navbars/CrewNavbar.js";
import CrewHeader from "components/Headers/CrewHeader.js";
import CrewSection01 from "components/Sections/CrewSection01.js";
import CrewSection02 from "components/Sections/CrewSection02.js";
import Section03 from "components/Sections/Section03.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "views/index-sections/Images.js";
import BasicElements from "views/index-sections/BasicElements.js";
import Navbars from "views/index-sections/Navbars.js";
import Tabs from "views/index-sections/Tabs.js";
import Pagination from "views/index-sections/Pagination.js";
import Notifications from "views/index-sections/Notifications.js";
import Typography from "views/index-sections/Typography.js";
import Javascript from "views/index-sections/Javascript.js";
import Carousel from "views/index-sections/Carousel.js";
import NucleoIcons from "views/index-sections/NucleoIcons.js";
import CompleteExamples from "views/index-sections/CompleteExamples.js";
import SignUp from "views/index-sections/SignUp.js";
import Examples from "views/index-sections/Examples.js";
import Download from "views/index-sections/Download.js";

function IntroduceDlgi() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <CrewNavbar />
      <div className="wrapper">
        <CrewHeader />
        <div className="main">
          {/* <Images /> */}
          <CrewSection01 />
          <CrewSection02 />
          <Section03 />
        </div>
        {/* <DarkFooter /> */}
      </div>
    </>
  );
}

export default IntroduceDlgi;
