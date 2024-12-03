import React, { useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { websiteLogo } from "assets";
import {
  FaLinkedin,
  FaPinterest,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { HiPhone } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowUp, IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const large = useMediaQuery({ query: "(min-width: 992px)" });
  const [showComponent, setShowComponent] = useState(false);

  const resources = [
    { id: 1, title: "Home", route: "/" },
    { id: 5, title: "Contact Us", route: "/" },
  ];

  const policies = [
    { id: 1, title: "Privacy Policy", route: "/" },
  ];

  const socialMedia = [
    {
      id: 1,
      title: "LinkedIn",
      icon: <FaLinkedin size={32} color="#e2e2e2" />,
      route: "https://www.linkedin.com/in/prachi-kurle-815ba9331/",
    },
    {
      id: 2,
      title: "Twitter",
      icon: <FaSquareXTwitter size={32} color="#e2e2e2" />,
      route: "https://x.com/PRACHIKURLE",
    },
    {
      id: 3,
      title: "Youtube",
      icon: <FaYoutube size={32} color="#e2e2e2" />,
      route: "https://www.youtube.com/@pixie1062",
    },
    {
      id: 4,
      title: "Pinterest",
      icon: <FaPinterest size={32} color="#e2e2e2" />,
      route: "https://www.pinterest.com/prachikurle54/",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 1 * window.innerHeight;

      if (scrollY > scrollThreshold) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      fluid
      className="pt-5 text-white bg-primary"
    >
      <div
        className={`d-flex ${large ? "justify-content-between" : "flex-column"
          }`}
        style={large ? styles.largeScreenPadding : { padding: 10 }}
      >
        <div className="me-3 mb-lg-0 mb-4">
          <div className="text-center mb-5 d-flex justify-content-start">
            <Image src={websiteLogo} style={{ width: large ? 200 : 100 }} />
          </div>
          <h5 className="subtitle pe-lg-4 text-secondary mb-4" style={{ fontWeight: 600 }}>
            Contact Details
          </h5>
          <a
            href="/"
            className="d-flex justify-lg-content-center align-items-center p-lg-0 mb-3"
            style={{ textDecoration: "none" }}
          >
            <span className="d-flex justify-content-center align-items-center text-secondary border-0">
              <IoLocationSharp />
            </span>
            <b className="text-secondary ms-2">Assistant Professor, SMEF's Brick School of Architecture, Pune - 411060</b>
          </a>
          <a
            href="tel:+91 8552004072"
            className="d-flex justify-lg-content-center align-items-center p-lg-0 mb-3"
            style={{ textDecoration: "none" }}
          >
            <span className="d-flex justify-content-center align-items-center text-secondary border-0">
              <HiPhone />
            </span>
            <b className="text-secondary ms-2">+91 8552004072</b>
          </a>
          <a
            href="mailto:prachi@brick.edu.in"
            className="d-flex justify-lg-content-center align-items-center p-lg-0"
            style={{ textDecoration: "none" }}
          >
            <span className="d-flex justify-content-center align-items-center text-secondary border-0">
              <IoMdMail />
            </span>
            <b className="text-secondary ms-2">prachi@brick.edu.in</b>
          </a>
        </div>
        <div className="me-3">
          <h5 className="subtitle pe-lg-4 text-secondary" style={{ fontWeight: 600 }}>
            Resources
          </h5>
          {resources.map((col) => {
            return (
              <div className="my-4">
                <a
                  href={col.route}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <p className="footer-info footer-link">{col.title}</p>
                </a>
              </div>
            );
          })}
        </div>
        <div className="me-3">
          <h5 className="subtitle pe-lg-4 text-secondary" style={{ fontWeight: 600 }}>
            Policies
          </h5>
          {policies.map((col) => {
            return (
              <div className="my-4">
                <a
                  href={col.route}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <p className="footer-info footer-link">{col.title}</p>
                </a>
              </div>
            );
          })}
        </div>
        <div className="me-3">
          <h5 className="subtitle text-secondary" style={{ fontWeight: 600 }}>
            Social Connects
          </h5>
          <Row lg={4} className="mt-3">
            {socialMedia.map((social) => {
              return (
                <Col className="mb-3 p-lg-0 p-2">
                  <a
                    href={social.route}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    {social.icon}
                  </a>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div
        className={`pb-4 ${large ? "d-flex justify-content-center align-items-center" : "mt-4"}`}
        style={{ right: 0, top: 0 }}
      >
        <span className="footer-info footer-link">{`© Ar. Prachi Kurle All Rights Reserved`}</span>
      </div>
      <div className={`${showComponent ? "" : "d-none"}`}>
        <div
          className="d-flex text-primary my-2 my-lg-4 cursor-pointer bg-white border border-primary"
          style={{
            textDecoration: "none",
            scrollBehavior: "smooth",
            position: window.scrollY > 200 ? "fixed" : "static",
            bottom: window.scrollY > 200 ? "20px" : "auto",
            right: window.scrollY > 200 ? "20px" : "auto",
            padding: "12px",
            backgroundColor: "#1B1E29",
            borderRadius: "25px",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <IoIosArrowUp size={20} />
        </div>
      </div>
    </Container>
  );
};

const styles = {
  largeScreenPadding: {
    paddingLeft: 100,
    paddingRight: 100,
  },
};

export default Footer;
