import React from "react";
import { Link } from "react-scroll"

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components
import HomeHeader from "../../components/Headers/HomeHeader.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import HomeNavbar from "../../components/Navbars/HomeNavbar.js"

const items = [
  {
    src: require("../../assets/img/kakao5.jpg").default,
    altText: "꾸엘리미~",
    caption: "꾸엘리미~",
  },
  {
    src: require("../../assets/img/kakao6.jpg").default,
    altText: "Let's Get it~!",
    caption: "Let's Get it~!",
  },
];

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <HomeNavbar />
      <div className="wrapper">
        <HomeHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Why we running?</h2>
                <h5 className="description">
                  러닝을 단순하게 달리는데 그치지 마세요.<br />
                  러닝은 우리 자신을 표현할 수 있는 또 다른 가치가 있습니다.<br />
                  달리기릿과 함께라면 당신의 러닝이 달라집니다.
                </h5>
              </Col>              
            </Row>
            <Row>
                <Col className="text-center">
                  <Link to="down-scroll" spy={true} smooth={true}>
                    <i className="now-ui-icons arrows-1_minimal-down"></i>            
                  </Link>
                </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview" id="down-scroll">
              <Row>
                <Col md="6">
                  <br /><br /><br /><br />
                  <h3>
                    달리기릿의 어원
                  </h3>
                  <p className="description">
                    '달리기' 그리고 'Let's Get it!!'
                  </p>
                  <p className="description">
                    - ChooooNo
                  </p>
                  <br />
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/kakao1.jpg").default + ")",
                    }}
                  >
                  </div>
                  <br /><br />
                </Col>
                <Col md="5">
                  <div className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/kakao8.jpg").default + ")",
                    }}
                  >
                  </div>
                  <br /><br /><br /><br /><br /><br /><br /><br />
                  <p className="description">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;
                    우리가 함께할 달리기릿은 그렇게 탄생했습니다.</p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                <h2>달리기릿의 표현방식</h2>
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../../assets/img/avatar.jpg").default}
                    ></img>
                    <h4 className="title">Romina Hadid</h4>
                    <p className="description">
                      러닝의 본질적인 가치와 멋을
                      달리기릿만의 표현방식으로<br />  
                      재해석 합니다.
                    </p>
                    <p className="description">
                      우리는 러닝과 새로운 예술 행위를 혼합하며 우리만의 새로운 형태의<br />러닝문화를 만들어 가길 원합니다.
                    </p>
                  </div>
                </Col>
                <Col md="5">
                  <div style={{height:'300px'}}>
                  <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                  >
                    <CarouselIndicators
                      items={items}
                      activeIndex={activeIndex}
                      onClickHandler={goToIndex}
                    />
                    {items.map((item) => {
                      return (
                        <CarouselItem
                          onExiting={onExiting}
                          onExited={onExited}
                          key={item.src}
                        >
                          <img src={item.src} alt={item.altText} />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>{item.caption}</h5>
                          </div>
                        </CarouselItem>
                      );
                    })}
                    <a
                      className="carousel-control-prev"
                      data-slide="prev"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        previous();
                      }}
                      role="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-left"></i>
                    </a>
                    <a
                      className="carousel-control-next"
                      data-slide="next"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        next();
                      }}
                      role="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-right"></i>
                    </a>
                    </Carousel>
                    </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* <DefaultFooter /> */}
      </div>
    </>
  );
}

export default LandingPage;
