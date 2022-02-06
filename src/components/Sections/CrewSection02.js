import React from "react";
import { useRef } from "react";

// reactstrap components
import { Container } from "reactstrap";

const CrewSection02 = () => {
  const div_CrewSection02 = useRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        const CrewHeaderHeight =
          document.getElementById("div_CrewHeader").clientHeight;
        const CrewSection01Height =
          document.getElementById("div_CrewSection01").clientHeight;

        const CrewSection02StartY = CrewHeaderHeight + CrewSection01Height;
        const FirstTopOffset =
          div_CrewSection02.current.getBoundingClientRect().top;

        const Parent = document.getElementById("div_CrewSection02");
        const backgroundDiv = document.getElementsByClassName(
          "crew-section02-background-img fixed-background-img"
        );
        var BlackDiv = document.getElementsByClassName("fixed-black-area");
        var iOpacity = 1;

        if (2400 <= window.scrollY) {
          //barkbark
          //console.log(1 - window.scrollY / homeHeigth);
          if (0 === BlackDiv.length) {
            const newDIV = document.createElement("div");
            newDIV.setAttribute("class", "fixed-black-area");
            Parent.insertBefore(newDIV, Parent.firstChild);
          } else {
            //Nothing to do.
          }

          if (0 === backgroundDiv.length) {
            const newDIV = document.createElement("div");
            Parent.insertBefore(newDIV, Parent.firstChild);
            newDIV.setAttribute(
              "class",
              "crew-section02-background-img fixed-background-img animation-init"
            );
            setTimeout(function () {
              newDIV.classList.add("animation-fade");
            }, 30);
          } else {
            //Nothing to do.
          }

          if (window.scrollY >= FirstTopOffset) {
            const CrewSection02Half =
              CrewSection02StartY +
              div_CrewSection02.current.getBoundingClientRect().height / 2;

            //스크롤이 색션의 반을 지났을때 다시 투명도 올리기
            if (window.scrollY > CrewSection02Half) {
              iOpacity = window.scrollY / CrewSection02StartY - 1.1;
              console.log(iOpacity);
              BlackDiv[0].style.opacity = iOpacity;
            } else {
              //스크롤이 색션의 반을 지나지 않았을때 투명도 내리기
              iOpacity = CrewSection02StartY / window.scrollY - 0.1;
              console.log(iOpacity);
              BlackDiv[0].style.opacity = iOpacity;
            }
          }
        } else {
          if (1 === BlackDiv.length) {
            Parent.removeChild(BlackDiv[0]);
          } else {
            //Nothing to do.
          }
          if (1 === backgroundDiv.length) {
            Parent.removeChild(backgroundDiv[0]);
          } else {
            //Nothing to do.
          }
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
        ref={div_CrewSection02}
        // className="crew-section02-background-img"
        id="div_CrewSection02"
        style={{
          height: "3500px",
          background: "#000000",
        }}
      >
        <Container>
          <div className="square-box">
            <div>
              <div>
                <span className="square-box-title">Crew Philosophy</span>
                <span className="square-box-contents">
                  달리기릿은 단순히 달리는 것이<br></br>
                  러닝의 전부가 아니라고 생각합니다.
                  <br></br>
                  달리기릿은 러닝 또는 러닝 문화가 가진 멋을 이해하며 러닝에
                  대한 철학, 느낌을 다른 예술 행위와 혼합하여 표현하는 크루
                  입니다.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CrewSection02;
