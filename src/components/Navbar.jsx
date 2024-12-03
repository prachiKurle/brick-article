import React, { useState } from "react";
import { Button, Container, Image, Nav, Navbar, Modal } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import { Breakpoint } from "react-socks";
import { CgMenu } from "react-icons/cg";
import { websiteLogo } from "assets";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { GoMail } from "react-icons/go";

import { useTransition, animated } from "react-spring";
import GoogleTranslate from "./GoogleTranslate";

const NavBar = () => {
  const navigate = useNavigate();
  const small = useMediaQuery({ query: "(min-width: 576px)" });
  const medium = useMediaQuery({ query: "(min-width: 768px)" });
  const large = useMediaQuery({ query: "(min-width: 992px)" });

  const [open, setOpen] = useState(false);

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

  // const nonactiveBar = {
  //   weight: "500",
  //   lineHeight: "24px",
  //   size: "20px",
  //   fontFamily: "Poppins",
  // };

  return (
    <>
      <Breakpoint large up>
        <Navbar
          fixed="top"
          className={`d-flex flex-column py-0`}
          style={{ minHeight: 92 }}
        >
          <Container fluid className="bg-white d-flex justify-content-end px-5" style={{height: 40}}>
            Ar. Prachi Kurle
          </Container>
          <Container fluid className="px-5 py-2 bg-primary">
            <Navbar.Brand href="/" className="p-0 d-flex align-items-center">
              <Image src={websiteLogo} alt="SKV Logo" height={60} loading="lazy" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                className="text-secondary px-3 px-lg-2 body-text2"
                href={`/`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className={`my-1 text-white poppins-700`}
                >
                  Home
                </div>
              </Nav.Link>
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
                >
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
                  Contact
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Breakpoint>
      <Breakpoint medium down>
        <Navbar
          className={`d-flex flex-column w-100 bg-primary`}
          fixed="top"
        >
          <Container
            fluid
            className="pb-2 px-0 mx-0"
            style={{ width: 95 + "%" }}
          >
            <div>
              <Navbar.Brand href="/" className="p-0 d-flex align-items-center">
                <Image src={websiteLogo} alt="SKV Logo" width={60} loading="lazy" />
              </Navbar.Brand>
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
                        <Image src={websiteLogo} alt="SKV Logo" width={60} loading="lazy" />
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
                        style={activeBar}
                      >
                        <h3 className="poppins-500 p-0 m-0">Home</h3>
                      </Nav.Link>

                      <hr className="w-100" />

                      <a
                        href="mailto:info@skv.com"
                        className="m-3 text-primary d-flex flex-column justify-content-center align-items-center text-decoration-none"
                      >
                        <h3 className="poppins-500 p-0 m-0">
                          <GoMail size={20} /> Mail
                        </h3>
                      </a>
                      <Nav.Link
                        as={Link}
                        className="m-2 d-flex flex-column justify-content-center align-items-center"
                        to="/get-in-touch"
                        onClick={() => setOpen(false)}
                        style={activeBar}
                      >
                        <h3 className="poppins-500 p-0 m-0">
                          Contact
                        </h3>
                      </Nav.Link>

                      <hr className="w-100" />

                      <Button className="m-1 mt-2 bg-transparent text-primary border-0 poppins-500 d-flex justify-content-center align-items-center">
                        <GoogleTranslate />
                      </Button>
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
