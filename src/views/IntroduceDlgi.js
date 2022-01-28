import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import CrewNavbar from "../components/Navbars/CrewNavbar.js";
import CrewHeader from "../components/Headers/CrewHeader.js";
import DarkFooter from "../components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import CrewSection01 from "./index-sections/CrewSection01.js";
import CrewSection02 from "./index-sections/CrewSection02.js";
import Section03 from "./index-sections/Section03.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";

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
