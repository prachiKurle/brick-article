import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Image,
  Nav,
  Navbar,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as authSlices from "reducer/authSlices";
import * as utilitySlice from "reducer/utilitySlice";
import { Breakpoint } from "react-socks";

import { CgMenu } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import LoginModal from "./LoginModal";
// import LanguageModal from "./LanguageModal";
import { newSkvWhiteLogo } from "assets";
import { t } from "i18next";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { GoMail } from "react-icons/go";

import { useTransition, animated } from "react-spring";
import WhatsAppModal from "./WhatsAppModal";
import CallModal from "./CallModal";
import GoogleTranslate from "./GoogleTranslate";
// import GoogleTranslate from "./GoogleTranslate";

const NavBar = ({ showLoginModal, setShowLoginModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const small = useMediaQuery({ query: "(min-width: 576px)" });
  const medium = useMediaQuery({ query: "(min-width: 768px)" });
  const large = useMediaQuery({ query: "(min-width: 992px)" });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [isScrolled, setIsScrolled] = useState(false);
  // const language = useSelector((state) => state.utilities.language);
  const location = useLocation();
  const params = location.pathname.split("/").filter((item) => item !== "");
  const param1 = params.length > 0 ? params[0] : "";
  const param2 = params.length > 1 ? params[1] : "";
  const param3 = params.length > 2 ? params[2] : "";

  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  // const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showForm, setShowForm] = useState("login");

  const [businessDropdown, setBusinessDropdown] = useState(false);
  const [businessHover, setBusinessHover] = useState(false);
  const [dropdownBusiness, setDropdownBusiness] = useState(null);
  const [businessServices, setBusinessServices] = useState([
    {
      id: 1,
      title: t("UAEMainlandBusinessSetup"),
      slug: "services/uae-mainland-business-setup",
      is_visible: true,
    },
    {
      id: 2,
      title: "UK Business Setup",
      slug: "uk-business-setup",
      is_visible: true,
    },
    {
      id: 4,
      title: "Hungary Business Setup",
      slug: "hungary-business-setup",
      is_visible: true,
    },
    {
      id: 3,
      title: t("UAEFreezoneBusinessSetup"),
      slug: "services/uae-free-zone-business-setup",
      is_visible: true,
    },
    {
      id: 5,
      title: "",
      slug: "",
      is_visible: true,
    },
  ]);

  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [serviceHover, setServiceHover] = useState(false);
  const [dropdownService, setDropdownService] = useState(null);
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([
    {
      id: 1,
      title: t("licenseServices"),
      slug: "license-service",
      is_visible: true,
    },
    {
      id: 2,
      title: t("amlRegistration"),
      slug: "aml-registration",
      is_visible: true,
    },
    { id: 3, title: t("proServices"), slug: "pro-service", is_visible: true },
    { id: 4, title: t("visaServices"), slug: "visa-service", is_visible: true },
    {
      id: 5,
      title: t("vatRegistrationAndCorporateTaxRegistration"),
      slug: "vat-corporate-tax-registration",
      is_visible: true,
    },
  ]);

  const [aboutUsDropdown, setAboutUsDropdown] = useState(false);
  const [aboutUsHover, setAboutUsHover] = useState(false);
  const [dropdownAboutUs, setDropdownAboutUs] = useState(null);
  const [aboutUs, setAboutUs] = useState([
    {
      id: 1,
      title: "Empowering Your Business Formation",
      slug: "about-us",
      is_visible: true,
    },
    {
      id: 2,
      title: "Chairman's Message",
      slug: "about-us/chairman-message",
      is_visible: true,
    },
    {
      id: 3,
      title: "Our Community",
      slug: "our-community",
      is_visible: true,
    },
  ]);

  // const [languages, setLanguages] = useState([]);

  // const fetchLanguages = async () => {
  //   const response = await utilitySlice.getLanguages();
  //   if (response) setLanguages(response.results);
  // };

  // useEffect(() => {
  //   fetchLanguages();
  // }, []);

  const handleLogout = async () => {
    await dispatch(authSlices.userLogout());
    await dispatch(utilitySlice.removeSessionId());
    navigate("/");
  };

  const transition = useTransition(open, {
    from: { y: "-100%" },
    enter: { y: "0%" },
    leave: { y: "-100%" },
    config: { duration: 300 },
  });

  const activeBar = {
    borderLeft: "4px solid red",
    weight: "500",
    lineHeight: "24px",
    size: "20px",
    fontFamily: "Poppins",
  };

  const nonactiveBar = {
    weight: "500",
    lineHeight: "24px",
    size: "20px",
    fontFamily: "Poppins",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Breakpoint large up>
        <Navbar
          fixed="top"
          className={`
            ${(isScrolled || (param1 !== "" && param1 !== "services" && param1 !== "business-setup-services" && param1 !== "uk-business-setup" && param1 !== "hungary-business-setup") || param3 === "plan")
              ? "bg-primary" : "bg-faded"}`}
          style={{ minHeight: 92 }}
        >
          <Container fluid className="px-5 py-2">
            {(isScrolled || param1 !== "") &&
              <Navbar.Brand href="/" className="p-0 d-flex align-items-center">
                <Image src={newSkvWhiteLogo} alt="SKV Logo" height={60} loading="lazy" />
              </Navbar.Brand>
            }
            <Nav className="me-auto">
              <Nav.Link
                className="text-secondary px-3 px-lg-2 body-text2"
                href={`/`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className={`my-1 text-white poppins-700`}
                >
                  {t("Home")}
                </div>
                {param1 === "" && (
                  <div
                    className="border-underline-white mt-1"
                    style={{ width: 20 }}
                  />
                )}
              </Nav.Link>

              <Nav.Item
                className="cursor-pointer text-white px-3 px-lg-2 body-text2"
                onMouseEnter={() => {
                  setBusinessDropdown(true);
                }}
                onMouseLeave={() => {
                  setBusinessDropdown(false);
                }}
              >
                <Nav.Link
                  className="text-white body-text2"
                  href={`/business-setup-services`}
                  style={{ textDecoration: "none" }}
                >
                  <div className={`my-1 text-white poppins-700`}>
                    Business Setup <FiChevronDown size="22" />
                  </div>
                  {(param1 === "business-setup-services" || param2 === "uae-free-zone-business-setup" || param2 === "uae-mainland-business-setup" || param1 === "uk-business-setup" || param1 === "hungary-business-setup") && (
                    <div
                      className="border-underline-white mt-1"
                      style={{ width: 20 }}
                    />
                  )}
                </Nav.Link>
                <Card
                  className={`position-absolute d-flex business-services-container ${businessDropdown ? "d-block" : "d-none"
                    }`}
                  style={{
                    zIndex: 2,
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #EFF0FA",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Body
                    className="p-3"
                    style={{ backgroundColor: "#FFFFFF", borderRadius: "10px" }}
                  >
                    <Row className="text-center text-bold">
                      <Col className="pb-2" lg={4} style={{ borderRight: "1px solid #000000" }}>UAE</Col>
                      <Col className="pb-2" lg={4} style={{ borderRight: "1px solid #000000" }}>United Kingdown</Col>
                      <Col className="pb-2" lg={4}>Hungary</Col>
                    </Row>
                    <Row className="text-center text-bold">
                      {businessServices
                        ?.filter((item) => item.is_visible)
                        ?.map((item, index) => {
                          return (
                            <div className="col-lg-4" key={item.title} style={index !== 2 ? { borderRight: "1px solid #000000" } : {}}>
                              <a
                                href={`/${item?.slug}`}
                                className="text-decoration-none w-100"
                              >
                                <Col
                                  lg={4}
                                  className={`${businessHover && dropdownBusiness === index
                                    ? "text-primary fw-bold"
                                    : "text-secondary"
                                    } text-decoration-none body-text2 my-1 p-1 px-2 w-100`}
                                  onMouseEnter={() => {
                                    setBusinessHover(true);
                                    setDropdownBusiness(index);
                                  }}
                                  onMouseLeave={() => {
                                    setBusinessHover(false);
                                    setDropdownBusiness(null);
                                  }}
                                  state={{ previousPage: location.pathname }}
                                >
                                  {item?.title}
                                </Col>
                              </a>
                            </div>
                          );
                        })}
                    </Row>
                  </Card.Body>
                </Card>
              </Nav.Item>

              <Nav.Item
                className="cursor-pointer text-white px-3 px-lg-2 body-text2"
                onMouseLeave={() => {
                  setServicesDropdown(false);
                }}
                onMouseEnter={() => {
                  setServicesDropdown(true);
                }}
              >
                <Nav.Link
                  className="text-white body-text2"
                  href={`/services`}
                  style={{ textDecoration: "none" }}
                >
                  <div className={`my-1 text-white poppins-700`}>
                    {t("ourServices")} <FiChevronDown size="22" />
                  </div>
                  {param1 === "services" && !(param2 === "uae-free-zone-business-setup" || param2 === "uae-mainland-business-setup" || param2 === "uk-business-setup" || param2 === "hungary-business-setup") && (
                    <div
                      className="border-underline-white mt-1"
                      style={{ width: 20 }}
                    />
                  )}
                </Nav.Link>
                <Card
                  className={`position-absolute p-2 d-flex services-container ${servicesDropdown ? "d-block" : "d-none"
                    }`}
                  style={{
                    zIndex: 2,
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #EFF0FA",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Body
                    className="p-2"
                    style={{ backgroundColor: "#FFFFFF", borderRadius: "10px" }}
                  >
                    <Row>
                      {services
                        ?.filter((item) => item.is_visible)
                        ?.map((item, index) => {
                          return (
                            <div className="col-sm-12" key={item.title}>
                              <a
                                href={`/services/${item?.slug}`}
                                className="text-decoration-none w-100"
                              >
                                <Col
                                  sm={12}
                                  className={`${serviceHover && dropdownService === index
                                    ? "text-primary fw-bold"
                                    : "text-secondary"
                                    } text-decoration-none body-text2 my-1 p-1 px-2 w-100`}
                                  onMouseEnter={() => {
                                    setServiceHover(true);
                                    setDropdownService(index);
                                  }}
                                  onMouseLeave={() => {
                                    setServiceHover(false);
                                    setDropdownService(null);
                                  }}
                                  state={{ previousPage: location.pathname }}
                                >
                                  {item?.title}
                                </Col>
                              </a>
                            </div>
                          );
                        })}
                    </Row>
                  </Card.Body>
                </Card>
              </Nav.Item>

              <Nav.Item
                className="cursor-pointer text-white px-3 px-lg-2 body-text2"
                onMouseLeave={() => {
                  setAboutUsDropdown(false);
                }}
                onMouseEnter={() => {
                  setAboutUsDropdown(true);
                }}
              >
                <Nav.Link
                  className="text-white body-text2"
                  href={`/about-us`}
                  style={{ textDecoration: "none" }}
                >
                  <div className={`my-1 text-white poppins-700`}>
                    {t("About Us")} <FiChevronDown size="22" />
                  </div>
                  {param1 === "about-us" && (
                    <div
                      className="border-underline-white mt-1"
                      style={{ width: 20 }}
                    />
                  )}
                </Nav.Link>
                <Card
                  className={`position-absolute p-2 d-flex about-us-container ${aboutUsDropdown ? "d-block" : "d-none"
                    }`}
                  style={{
                    zIndex: 2,
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #EFF0FA",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Body
                    className="p-2"
                    style={{ backgroundColor: "#FFFFFF", borderRadius: "10px" }}
                  >
                    <Row className="text-center d-flex justify-content-center align-items-center">
                      {aboutUs
                        ?.filter((item) => item.is_visible)
                        ?.map((item, index) => {
                          return (
                            <div className="col-sm-4" key={item.title} style={index < aboutUs.length - 1 ? { borderRight: "1px solid #000000" } : {}}>
                              <a
                                href={`/${item?.slug}`}
                                className="text-decoration-none w-100"
                              >
                                <Col
                                  lg={4}
                                  sm={4}
                                  className={`${aboutUsHover && dropdownAboutUs === index
                                    ? "text-primary fw-bold"
                                    : "text-secondary"
                                    } text-decoration-none body-text2 my-1 p-1 px-2 w-100`}
                                  onMouseEnter={() => {
                                    setAboutUsHover(true);
                                    setDropdownAboutUs(index);
                                  }}
                                  onMouseLeave={() => {
                                    setAboutUsHover(false);
                                    setDropdownAboutUs(null);
                                  }}
                                  state={{ previousPage: location.pathname }}
                                >
                                  {item?.title}
                                </Col>
                              </a>
                            </div>
                          );
                        })}
                    </Row>
                  </Card.Body>
                </Card>
              </Nav.Item>

              <Nav.Link
                className="text-white px-3 px-lg-2 body-text2"
                href="/promotions"
                style={{ textDecoration: "none" }}
              >
                <div className="my-1 poppins-700">{t("Promotions")}</div>
                {param1 === "promotions" && (
                  <div
                    className="bg-white border-underline-white mt-1"
                    style={{ width: 20 }}
                  />
                )}
              </Nav.Link>

              <Nav.Link
                className="text-white px-3 px-lg-4 body-text2"
                href="/blogs"
                style={{ textDecoration: "none" }}
              >
                <div className="my-1 poppins-700">{t("Blogs")}</div>
                {param1 === "blogs" && (
                  <div
                    className="bg-white border-underline-white mt-1"
                    style={{ width: 20 }}
                  />
                )}
              </Nav.Link>

              {/* <Nav.Link
                className="text-secondary px-3 px-lg-2 px-xl-3 body-text2"
                style={{ textDecoration: "none" }}
              >
                <div
                  onClick={() =>
                    window.open("https://www.google.com/", "_blank")
                  }
                >
                  <div className="my-2">
                    <a
                      className="text-secondary poppins-400"
                      href="https://www.google.com/"
                      style={{ textDecoration: "none" }}
                    >
                      External Website Link
                    </a>
                  </div>
                </div>
              </Nav.Link> */}
            </Nav>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="focus-none p-1 border-0"
            >
              <CgMenu size={medium ? 28 : small ? 24 : 22} color="#fff" />
            </Navbar.Toggle>

            <Navbar.Collapse
              id="navbarScroll"
              className={
                large ? "d-flex justify-content-end" : "pb-4"
              }
              style={{ borderRadius: 10 }}
            >
              <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                <Button
                  className="bg-tertiary text-primary primary-button border border-info poppins-600 me-3"
                  style={{ width: 44, height: 44, borderRadius: 22 }}
                  onClick={() => setShowWhatsAppModal(true)}
                >
                  <FaWhatsapp size={18} />
                </Button>
                <Button
                  className="bg-tertiary text-primary primary-button border border-info poppins-600 me-3"
                  style={{ width: 44, height: 44, borderRadius: 22 }}
                  onClick={() => setShowCallModal(true)}
                >
                  <MdPhone size={18} />
                </Button>
                <a href="mailto:info@skvbusiness.com">
                  <Button
                    className="bg-tertiary text-primary primary-button border border-info poppins-600 me-3"
                    style={{ width: 44, height: 44, borderRadius: 22 }}
                  >
                    <GoMail size={18} />
                  </Button>
                </a>
                <div
                  className="bg-tertiary text-primary primary-button border border-info poppins-500 me-3 d-flex justify-content-center align-items-center px-2"
                  style={{
                    borderRadius: 22,
                    height: 44,
                  }}
                // onClick={() => setShowLanguageModal(true)}
                >
                  {/* <MdLanguage size={18} />
                  <span className="ms-2">
                    {languages.length > 0 &&
                      language &&
                      languages.filter(
                        (lan) => lan.language_code === language
                      )[0].name}
                  </span> */}
                  <GoogleTranslate />
                </div>
                <Button
                  className="bg-primary text-white primary-button poppins-500"
                  style={{
                    paddingLeft: 26,
                    paddingRight: 26,
                    borderRadius: 27,
                    height: 54,
                    border: "2px solid #ffffff"
                  }}
                  onClick={() => navigate(`/get-in-touch`)}
                >
                  {t("getInTouch")}
                </Button>
                <Nav
                  className={`${large
                    ? "ms-3 my-2 my-lg-0 font-inter"
                    : "my-2 my-lg-0 font-inter"
                    }`}
                  navbarScroll
                  style={{ fontWeight: 600, fontSize: "14px" }}
                >
                  {!isAuthenticated ? (
                    param1 !== "login" && (
                      <Button
                        className="bg-tertiary text-primary primary-button border border-primary poppins-500"
                        onClick={() => {
                          setShowLoginModal(!showLoginModal);
                        }}
                        style={{
                          paddingLeft: 26,
                          paddingRight: 26,
                          borderRadius: 27,
                          height: 54,
                        }}
                      >
                        {t("Log In")}
                      </Button>
                    )
                  ) : (
                    <Button
                      className="bg-tertiary text-primary primary-button border border-primary poppins-500"
                      onClick={() => navigate("/account")}
                      style={{ width: 60, height: 54, borderRadius: 27 }}
                    >
                      {user?.first_name?.split("")[0]}
                      {user?.last_name?.split("")[0]}
                    </Button>
                    // <NavDropdown
                    //     title="Account"
                    //     className="mx-xl-2 text-black"
                    // >
                    //     <NavDropdown.Item
                    //         onClick={() => navigate("/account/inquiries")}
                    //         className={`py-2 px-xl-2 ${accHover === "inquiries" ? "text-primary" : "text-black"
                    //             }`}
                    //         onMouseEnter={() => setAccHover("inquiries")}
                    //         onMouseLeave={() => setAccHover(null)}
                    //         style={{ fontWeight: 600, fontSize: "14px" }}
                    //     >
                    //         Inquiries
                    //     </NavDropdown.Item>
                    //     <NavDropdown.Item
                    //         onClick={() => navigate("/account/orders")}
                    //         className={`py-2 px-xl-2 ${accHover === "orders" ? "text-primary" : "text-black"
                    //             }`}
                    //         onMouseEnter={() => setAccHover("orders")}
                    //         onMouseLeave={() => setAccHover(null)}
                    //         style={{ fontWeight: 600, fontSize: "14px" }}
                    //     >
                    //         Orders
                    //     </NavDropdown.Item>
                    //     <NavDropdown.Item
                    //         onClick={() => navigate("/account/profile")}
                    //         className={`py-2 px-xl-2 ${accHover === "profile" ? "text-primary" : "text-black"
                    //             }`}
                    //         onMouseEnter={() => setAccHover("profile")}
                    //         onMouseLeave={() => setAccHover(null)}
                    //         style={{ fontWeight: 600, fontSize: "14px" }}
                    //     >
                    //         Profile
                    //     </NavDropdown.Item>
                    //     <NavDropdown.Item
                    //         onClick={handleLogout}
                    //         className={`py-2 px-xl-2 ${accHover === "logout" ? "text-primary" : "text-black"
                    //             }`}
                    //         onMouseEnter={() => setAccHover("logout")}
                    //         onMouseLeave={() => setAccHover(null)}
                    //         style={{ fontWeight: 600, fontSize: "14px" }}
                    //     >
                    //         Logout
                    //     </NavDropdown.Item>
                    // </NavDropdown>
                  )}
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <LoginModal
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      </Breakpoint>
      <Breakpoint medium down>
        <Navbar
          className={`d-flex flex-column w-100 ${isScrolled || param1 !== "" ? "bg-primary" : ""}`}
          fixed="top"
        >
          <Container
            fluid
            className="pb-2 px-0 mx-0"
            style={{ width: 95 + "%" }}
          >
            <div>
              {(isScrolled || param1 !== "") &&
                <Navbar.Brand href="/" className="p-0 d-flex align-items-center">
                  <Image src={newSkvWhiteLogo} alt="SKV Logo" width={60} loading="lazy" />
                </Navbar.Brand>
              }
            </div>
            <div className="d-flex">
              <Button
                size="lg"
                className="d-flex justify-content-center align-items-center border-0 bg-transparent p-0"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <IoIosMenu size={30} color="#ffffff" />
              </Button>
            </div>
          </Container>
        </Navbar>
        {transition(
          (props, item) =>
            item && (
              <Modal
                className="custom-modal"
                contentClassName="custom-modal-dialog"
                dialogClassName="custom-modal-dialog"
                show={open}
                style={{
                  overflow: "hidden",
                  borderRadius: "0px",
                }}
              >
                <Modal.Header
                  style={{
                    border: "none !important",
                    borderBottom: "none !important",
                  }}
                >
                  <Navbar
                    className="d-flex flex-column w-100 bg-primary"
                    fixed="top"
                  >
                    <Container
                      fluid
                      className="pb-2 px-0 mx-0"
                      style={{ width: 95 + "%" }}
                    >
                      <Navbar.Brand
                        href="/"
                        className="p-0 d-flex align-items-center"
                      >
                        <Image src={newSkvWhiteLogo} alt="SKV Logo" width={60} loading="lazy" />
                      </Navbar.Brand>
                      <div className="d-flex">
                        <Button
                          size="lg"
                          className="d-flex justify-content-center align-items-center border-0 bg-transparent p-0"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <RxCross2 size={25} color="#FFFFFF" />
                        </Button>
                      </div>
                    </Container>
                  </Navbar>
                </Modal.Header>
                <Modal.Body className="overflow-scroll">
                  <Container
                    as={animated.div}
                    className="position-fixed overflow-scroll pb-5 w-100 bg-tertiary noScrollBar"
                    fluid
                    style={{
                      width: "100%",
                      height: "100%",
                      y: props.y,
                      top: 85,
                      left: 0,
                      transition: "height 0.5s ease-in-out",
                      zIndex: 999,
                    }}
                  >
                    <Nav
                      className={`ms-auto mt-1 d-flex align-items-start justify-content-center flex-column d-lg-none`}
                    >
                      <Nav.Link
                        as={Link}
                        className="m-2 d-flex flex-column justify-content-center align-items-center"
                        to="/"
                        onClick={() => setOpen(false)}
                        style={param1 === "" ? activeBar : nonactiveBar}
                      >
                        <h3 className="poppins-500 p-activeBar0 m-0">{t("home")}</h3>
                      </Nav.Link>
                      <Nav.Link
                        className="m-2 d-flex flex-column justify-content-center align-items-center"
                        onClick={() => {
                          setBusinessHover(!businessHover);
                        }}
                        style={(param1 === "uk-business-setup" || param1 === "hungary-business-setup" || param2 === "uae-mainland-business-setup" || param2 === "uae-free-zone-business-setup") ? activeBar : nonactiveBar}
                      >
                        {!businessHover && (
                          <h3 className="text-primary p-0 m-0">
                            Business Setup
                            <AiFillCaretDown
                              width={"12px"}
                              height={"6px"}
                              top={"14.25px"}
                              left={"18px"}
                            ></AiFillCaretDown>
                          </h3>
                        )}
                        {businessHover && (
                          <h3 className="text-primary p-0 m-0">
                            Business Setup
                            <AiFillCaretUp
                              width={"12px"}
                              height={"6px"}
                              top={"14.25px"}
                              left={"18px"}
                            ></AiFillCaretUp>
                          </h3>
                        )}
                      </Nav.Link>
                      {businessHover &&
                        businessServices.filter(i => i.is_visible).map((item) => {
                          return (
                            <Nav.Link
                              as={Link}
                              className="m-2 d-flex flex-column justify-content-center align-items-center"
                              to={`/${item.slug}`}
                              onClick={() => {
                                setOpen(false)
                                setBusinessHover(false)
                              }}
                            >
                              <h4 className="poppins-500 p-0 ps-4 m-0">{item.title}</h4>
                            </Nav.Link>
                          )
                        })
                      }
                      <Nav.Link
                        className="m-2 d-flex flex-column justify-content-center align-items-center"
                        onClick={() => {
                          setServiceHover(!serviceHover);
                        }}
                        style={param1 === "services" ? activeBar : nonactiveBar}
                      >
                        {!serviceHover && (
                          <h3 className="text-primary p-0 m-0">
                            {t("services")}
                            <AiFillCaretDown
                              width={"12px"}
                              height={"6px"}
                              top={"14.25px"}
                              left={"18px"}
                            ></AiFillCaretDown>
                          </h3>
                        )}
                        {serviceHover && (
                          <h3 className="text-primary p-0 m-0">
                            {t("services")}
                            <AiFillCaretUp
                              width={"12px"}
                              height={"6px"}
                              top={"14.25px"}
                              left={"18px"}
                            ></AiFillCaretUp>
                          </h3>
                        )}
                      </Nav.Link>
                      {serviceHover &&
                        services.filter(i => i.is_visible).map((item) => {
                          return (
                            <Nav.Link
                              as={Link}
                              className="m-2 d-flex flex-column justify-content-center align-items-center"
                              to={`/services/${item.slug}`}
                              onClick={() => {
                                setOpen(false)
                                setServiceHover(false)
                              }}
                            >
                              <h4 className="poppins-500 p-0 ps-4 m-0">{item.title}</h4>
                            </Nav.Link>
                          )
                        })
                      }
                      <Nav.Link
                        className="m-2 d-flex flex-column justify-content-center align-items-center"
                        onClick={() => {
                          setAboutUsHover(!aboutUsHover);
                        }}
                        style={(param1 === "about-us" || param1 === "our-community") ? activeBar : nonactiveBar}
                      >
                        {!aboutUsHover && (
                          <h3 className="text-primary p-0 m-0">
                            {t("aboutUs")}
                            <AiFillCaretDown
                              width={"12px"}
                              height={"6px"}
                              top={"14.25px"}
                              left={"18px"}
                            ></AiFillCaretDown>
                          </h3>
                        )}
                        {aboutUsHover && (
                          <h3 className="text-primary p-0 m-0">
                            {t("aboutUs")}
                            <AiFillCaretUp
                              width={"12px"}
                              height={"6px"}
                              top={"14.25px"}
                              left={"18px"}
                            ></AiFillCaretUp>
                          </h3>
                        )}
                      </Nav.Link>
                      {aboutUsHover &&
                        aboutUs.filter(i => i.is_visible).map((item) => {
                          return (
                            <Nav.Link
                              as={Link}
                              className="m-2 d-flex flex-column justify-content-center align-items-center"
                              to={`/${item.slug}`}
                              onClick={() => {
                                setOpen(false)
                                setAboutUsHover(false)
                              }}
                            >
                              <h4 className="poppins-500 p-0 ps-4 m-0">{item.title}</h4>
                            </Nav.Link>
                          )
                        })
                      }

                      <Nav.Link
                        as={Link}
                        className="m-2 d-flex flex-column justify-content-center align-items-center"
                        to="/promotions"
                        onClick={() => setOpen(false)}
                        style={param1 === "promotions" ? activeBar : nonactiveBar}
                      >
                        <h3 className="poppins-500 p-0 m-0">{t("promotions")}</h3>
                      </Nav.Link>

                      <Nav.Link
                        as={Link}
                        className="m-2 d-flex flex-column justify-content-center align-items-center"
                        to="/blogs"
                        onClick={() => setOpen(false)}
                        style={param1 === "blogs" ? activeBar : nonactiveBar}
                      >
                        <h3 className="poppins-500 p-0 m-0">{t("blogs")}</h3>
                      </Nav.Link>

                      <hr className="w-100" />

                      <div className="m-3 text-primary d-flex flex-column justify-content-center align-items-center">
                        <h3 className="poppins-500 p-0 m-0"
                          onClick={() => {
                            setOpen(false)
                            setShowWhatsAppModal(true)
                          }}
                        >
                          <FaWhatsapp size={20} /> {t("message")}
                        </h3>
                      </div>
                      <div className="m-3 text-primary d-flex flex-column justify-content-center align-items-center">
                        <h3 className="poppins-500 p-0 m-0"
                          onClick={() => {
                            setOpen(false)
                            setShowCallModal(true)
                          }}
                        >
                          <MdPhone size={20} /> {t("call")}
                        </h3>
                      </div>
                      <a
                        href="mailto:info@skv.com"
                        className="m-3 text-primary d-flex flex-column justify-content-center align-items-center text-decoration-none"
                      >
                        <h3 className="poppins-500 p-0 m-0">
                          <GoMail size={20} /> {t("mail")}
                        </h3>
                      </a>
                      <Nav.Link
                        as={Link}
                        className="m-2 d-flex flex-column justify-content-center align-items-center"
                        to="/get-in-touch"
                        onClick={() => setOpen(false)}
                        style={
                          param1 === "get-in-touch" ? activeBar : nonactiveBar
                        }
                      >
                        <h3 className="poppins-500 p-0 m-0">
                          {t("getInTouch")}
                        </h3>
                      </Nav.Link>

                      <hr className="w-100" />

                      <Button
                        className="m-1 mt-2 bg-transparent text-primary border-0 poppins-500 d-flex justify-content-center align-items-center"
                      // onClick={() => {
                      //   setOpen(false);
                      //   setShowLanguageModal(true);
                      // }}
                      >
                        {/* <MdLanguage size={20} />
                        <h3 className="ms-2 mb-0">
                          {languages.length > 0 &&
                            language &&
                            languages.filter(
                              (lan) => lan.language_code === language
                            )[0].name}
                        </h3> */}
                        <GoogleTranslate />
                      </Button>

                      {isAuthenticated && (
                        <Nav.Link
                          as={Link}
                          className="m-2 d-flex flex-column justify-content-center align-items-center"
                          to="/account"
                          onClick={() => setOpen(false)}
                          style={
                            param1 === "account" ? activeBar : nonactiveBar
                          }
                        >
                          <h3 className="poppins-500 p-0 m-0">
                            {t("account")}
                          </h3>
                        </Nav.Link>
                      )}

                      <div className={`${isAuthenticated ? "mb-4" : "d-none"}`}>
                        <Nav.Link
                          as={Link}
                          className="mx-2 my-1 d-flex flex-column justify-content-center align-items-center"
                          to={`/`}
                          onClick={() => {
                            navigate("/");
                            handleLogout();
                            setOpen(false);
                          }}
                        >
                          <h3 className="poppins-500 p-0 m-0">{t("Logout")}</h3>
                        </Nav.Link>
                      </div>
                      <div
                        className={`${isAuthenticated ? "d-none" : ""
                          } d-flex flex-column justify-content-center align-items-center w-100`}
                      >
                        <Button
                          className="text-white primary-button poppins-600"
                          onClick={() => {
                            setOpen(false);
                            setShowLoginModal(!showLoginModal);
                          }}
                          style={{
                            paddingLeft: 30,
                            paddingRight: 30,
                            borderRadius: 30,
                            height: 60,
                          }}
                        >
                          {t("login")}
                        </Button>
                      </div>
                    </Nav>
                  </Container>
                </Modal.Body>
              </Modal>
            )
        )}
      </Breakpoint>
    </>
  );
};

export default NavBar;
