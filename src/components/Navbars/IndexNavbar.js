import React, { useReducer } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  // @ts-ignore
} from "reactstrap";

function reducer(state, action) {
  switch (action.type) {
    case "DOWN":
      return "#ffffff";
    case "UP":
      return "#003efd";
    default:
      return state;
  }
}

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [MainLogoColor, setMainLogoColor] = React.useState("blue");
  const [navFontColor, setNavFontColor] = React.useState("#000000");
  const [ToggleBtnColor, dispatch] = useReducer(reducer, "#003efd");
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
        setMainLogoColor("white");
        setNavFontColor("#ffffff");
        // @ts-ignore
        dispatch({ type: "DOWN" });
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
        setMainLogoColor("blue");
        setNavFontColor("#000000");
        // @ts-ignore
        dispatch({ type: "UP" });
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="/home" target="_blank" id="navbar-brand">
              <img
                alt="..."
                className="dlgi-logo"
                src={
                  require(`../../assets/img/dlgi-logo-${MainLogoColor}.png`)
                    .default
                }
              ></img>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Home
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span
                className="navbar-toggler-bar top-bar"
                style={{ background: `${ToggleBtnColor}` }}
              ></span>
              <span
                className="navbar-toggler-bar middle-bar"
                style={{ background: `${ToggleBtnColor}` }}
              ></span>
              <span
                className="navbar-toggler-bar bottom-bar"
                style={{ background: `${ToggleBtnColor}` }}
              ></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="/dlgicrew"
                  target="_blank"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   document
                  //     .getElementById("download-section")
                  //     .scrollIntoView();
                  // }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p style={{ color: `${navFontColor}` }}>크루소개</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p style={{ color: `${navFontColor}` }}>신청서</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p style={{ color: `${navFontColor}` }}>SHOP</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p style={{ color: `${navFontColor}` }}>사진공유</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p style={{ color: `${navFontColor}` }}>자주하는 질문</p>
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Components</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All components
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              {/* <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nukr-index-navbar"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Upgrade to PRO</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Cooming soon!
                </UncontrolledTooltip>
              </NavItem> */}
              {/* <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem> */}
            </Nav>
            <Nav navbar>
              <NavItem>
                <NavLink href="/login">
                  <p style={{ color: `${navFontColor}` }}>로그인</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i
                    id="i_userJoin"
                    className="now-ui-icons users_single-02"
                    style={{ color: `${navFontColor}` }}
                  ></i>
                </NavLink>
                <UncontrolledTooltip target="#i_userJoin">
                  회원가입
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
