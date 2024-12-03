import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { newSkvWhiteLogo } from "assets";
import {
  FaLinkedinIn,
  FaSquareFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { HiPhone } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { t } from "i18next";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const large = useMediaQuery({ query: "(min-width: 992px)" });
  const [showComponent, setShowComponent] = useState(false);

  const column1 = [
    { id: 1, title: t("home"), route: "/" },
    { id: 2, title: t("businessSetupServices"), route: "/business-setup-services" },
    { id: 3, title: t("ourServices"), route: "/services" },
    // { id: 3, title: "Promotions", route: "/promotions" },
    { id: 4, title: t("aboutUs"), route: "/about-us" },
    { id: 5, title: t("blogs"), route: "/blogs" },
    { id: 6, title: t("contactUs"), route: "/get-in-touch" },
  ];

  const column2 = [
    { id: 1, title: "Empowering Your Business Formation", route: "about-us" },
    { id: 2, title: "Chairman's Message", route: "about-us/chairman-message" },
    { id: 3, title: "Our Community", route: "our-community" },
  ];

  const column3 = [
    { id: 1, title: t("UAEMainlandBusinessSetup"), route: "/services/uae-mainland-business-setup" },
    { id: 2, title: t("UAE Free zone Business Setup"), route: "/services/uae-free-zone-business-setup" },
    { id: 2, title: "UK Business Setup", route: "/uk-business-setup" },
    { id: 2, title: "Hungary Business Setup", route: "/hungary-business-setup" },
  ];

  const column4 = [
    { id: 1, title: t("licenseServices"), route: "/license-service" },
    { id: 2, title: t("amlRegistration"), route: "/aml-registration" },
    { id: 3, title: t("proServices"), route: "/pro-service" },
    { id: 4, title: t("visaServices"), route: "/visa-service" },
    { id: 5, title: t("vatAndCorporateTaxRegistration"), route: "/vat-corporate-tax-registration" },
  ];

  const column5 = [
    { id: 1, title: "Single/Multi Entry Visa", route: "/visa-service" },
    { id: 2, title: t("goldenVisa"), route: "/golden-visa" },
    { id: 3, title: t("schengenVisa"), route: "/schengen-visa" },
  ];

  const differentLocationPhone = [
    { id: 1, title: t("UAE") + ", +971 52 739 6758", number: "tel:+971 52 739 6758" },
    { id: 2, title: t("unitedKingdom") + ", +44 77003 05114", number: "tel:+44 77003 05114" },
    { id: 3, title: t("hungary") + ", +36 20 276 7431", number: "tel:+36 20 276 7431" },
  ]

  const lastLinks = [
    { id: 1, title: t("privacyPolicy"), route: "/" },
    { id: 2, title: t("termsOfService"), route: "/" },
  ];

  const socialMedia = [
    {
      id: 1,
      title: t("linkedIn"),
      icon: <FaLinkedinIn color="#FFFFFF" />,
      route: "https://www.linkedin.com/in/skv-business-services-78b41130a/",
    },
    {
      id: 2,
      title: t("instagram"),
      icon: <FaInstagram color="#FFFFFF" />,
      route: "https://www.instagram.com/skv_business_services/",
    },
    {
      id: 3,
      title: t("youtube"),
      icon: <FaYoutube color="#FFFFFF" />,
      route: "https://www.youtube.com/@SKVBusinessServices",
    },
    {
      id: 4,
      title: t("facebook"),
      icon: <FaSquareFacebook color="#FFFFFF" />,
      route: "https://www.facebook.com/profile.php?id=61557916137023",
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
      className="pt-5 text-white"
      style={{ backgroundColor: "#2E3192" }}
    >
      <div
        className={`d-flex ${large ? "justify-content-between" : "flex-column"
          }`}
        style={large ? styles.largeScreenPadding : { padding: 10 }}
      >
        <div className="mb-4 me-3">
          <h5 className="subtitle pe-lg-4" style={{ fontWeight: 600 }}>
            {t("quickLinks")}
          </h5>
          {column1.map((col) => {
            return (
              <div className="my-4">
                <a
                  href={col.route}
                  target="_blank"
                  className="text-decoration-none"
                >
                  <p className="footer-info footer-link">{col.title}</p>
                </a>
              </div>
            );
          })}
        </div>
        <div className="mb-4 me-3">
          <h5
            className="subtitle d-flex flex-column"
            style={{ fontWeight: 600 }}
          >
            <span>{`${t("aboutUs")}`} </span>
          </h5>
          {column2.map((col) => {
            return (
              <div className="my-4">
                <a
                  href={col.route}
                  target="_blank"
                  className="text-decoration-none"
                >
                  <p className="footer-info footer-link">{col.title}</p>
                </a>
              </div>
            );
          })}
        </div>
        <div className="mb-4 me-3">
          <h5 className="subtitle pe-lg-4" style={{ fontWeight: 600 }}>
            {t("businessSetupServices")}
          </h5>
          {column3.map((col) => {
            return (
              <div className="my-4">
                <a
                  href={col.route}
                  target="_blank"
                  className="text-decoration-none"
                >
                  <p className="footer-info footer-link">{col.title}</p>
                </a>
              </div>
            );
          })}
        </div>
        <div className="mb-4 me-3">
          <h5 className="subtitle pe-lg-4" style={{ fontWeight: 600 }}>
            {t("ourServices")}
          </h5>
          {column4.map((col) => {
            return (
              <div className="my-4">
                <a
                  href={`/services${col.route}`}
                  target="_blank"
                  className="text-decoration-none"
                >
                  <p className="footer-info footer-link">{col.title}</p>
                </a>
              </div>
            );
          })}
        </div>
        <div className="mb-4 me-3">
          <h5 className="subtitle pe-lg-4" style={{ fontWeight: 600 }}>
            {t("visaServices")}
          </h5>
          {column5.map((col) => {
            return (
              <div className="my-4">
                <a
                  href={`/services${col.route}`}
                  target="_blank"
                  className="text-decoration-none"
                >
                  <p className="footer-info footer-link">{col.title}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`d-flex ${large ? "justify-content-between p-4" : "flex-column"
          }`}
        style={
          large ? styles.largeScreenMargin : { backgroundColor: "#F2F5F7" }
        }
      >
        {/* <div className="d-flex justify-content-center align-items-center ps-lg-5">
          <span className="d-flex justify-content-center align-items-center text-primary" style={{ width: 32, height: 32, border: "1px solid #2E3192", borderRadius: 16 }}>
            <IoLocationSharp />
          </span>
          <span className="text-primary body-text1 ms-3">Lorem ipsum dolor sit amet,</span>
        </div> */}
        {differentLocationPhone.map((location) => {
          return (
            <a
              href={location.number}
              className="d-flex justify-lg-content-center align-items-center p-lg-0 p-3"
              style={{ textDecoration: "none" }}
            >
              <span
                className="d-flex justify-content-center align-items-center text-primary"
                style={{
                  width: 32,
                  height: 32,
                  border: "1px solid #2E3192",
                  borderRadius: 16,
                }}
              >
                <HiPhone />
              </span>
              <b className="text-primary ms-3">{location.title}</b>
            </a>
          )
        })}
        {/* <div className="d-flex justify-content-center align-items-center pe-lg-5">
          <span className="d-flex justify-content-center align-items-center text-primary" style={{ width: 32, height: 32, border: "1px solid #2E3192", borderRadius: 16 }}>
            <IoMdMail />
          </span>
          <a href="mailto:info@skv.com">
            <span className="text-primary body-text1 ms-3">info@skv.com</span>
          </a>
        </div> */}
      </div>

      <div className="text-center my-5">
        <Image src={newSkvWhiteLogo} alt="SKV White Logo" style={{ width: 200 }} />
      </div>

      <div
        className={`${large ? "text-center position-relative" : "m-0"} pb-5`}
        style={{ marginLeft: 100, marginRight: 100 }}
      >
        <div
          className={
            large
              ? "d-flex justify-content-center align-items-center position-absolute"
              : ""
          }
        >
          {lastLinks.map((col) => {
            return (
              <a className="me-lg-3" href={col.route} target="_blank">
                <p className="footer-info footer-link">{col.title}</p>
              </a>
            );
          })}
        </div>
        <div
          className={`d-flex ${large ? "justify-content-center align-items-center" : "mt-5"
            }`}
        >
          {socialMedia.map((social) => {
            return (
              <span
                className="d-flex justify-content-center align-items-center border mx-lg-3 me-3"
                style={{ width: 32, height: 32, borderRadius: 16 }}
              >
                <a
                  href={social.route}
                  target="_blank"
                  className="text-decoration-none"
                >
                  {social.icon}
                </a>
              </span>
            );
          })}
        </div>
        <div
          className={
            large
              ? "d-flex justify-content-center align-items-center position-absolute"
              : "mt-4"
          }
          style={{ right: 0, top: 0 }}
        >
          <span className="footer-info">{`© 2024 SKV. ${t(
            "allRightsReserved"
          )}`}</span>
        </div>
      </div>

      <div className={`${showComponent ? "" : "d-none"}`}>
        <div
          className="d-flex my-2 my-lg-4 cursor-pointer"
          style={{
            textDecoration: "none",
            scrollBehavior: "smooth",
            position: window.scrollY > 200 ? "fixed" : "static",
            bottom: window.scrollY > 200 ? "0px" : "auto",
            left: window.scrollY > 200 ? "20px" : "auto",
            padding: "12px",
            backgroundColor: "#11066B",
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
  parentContainer: {
    backgroundColor: "#141415",
    borderRadius: 0,
  },
  largeScreenPadding: {
    paddingLeft: 100,
    paddingRight: 100,
  },
  largeScreenMargin: {
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: "#F2F5F7",
  },
  socialImage: {
    cursor: "pointer",
    width: "57px",
    height: "57px",
  },
  socialImageMobile: {
    cursor: "pointer",
    height: "24px",
    width: "24px",
  },
  youtubeImage: {
    cursor: "pointer",
    width: "57px",
    height: "52px",
  },
  youtubeImageMobile: {
    cursor: "pointer",
    height: "20px",
    width: "24px",
  },
};

export default Footer;
