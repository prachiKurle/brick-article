import React, { useState } from "react";
import { Container, Image, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { FiCopy } from "react-icons/fi";
import { FaLinkedinIn, FaSquareFacebook, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { authorImage, mainBlogImage } from "assets";

const Blog = () => {
  const large = useMediaQuery({ query: "(min-width: 992px)" });
  const tags_array = ["Aweomse", "Bloosom", "Prachi Kurle"]
  const publishedData = "04/12/2024"
  const share_url = window.location.href;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(share_url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {copied ? 'Copied!' : 'Copy link'}
    </Tooltip>
  );

  return (
    <Container fluid className="my-5 py-5">
      <Container className="my-lg-5 pt-5 user-select-none d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="text-primary poppins-600">
            Published{" "}{publishedData}
          </div>
          <div className="mb-4 page-header d-flex justify-content-center align-items-center">
            Pune Metro Phase 2 Sparks Real Estate Surge: What to Expect in the Coming Years
          </div>
          <div className={`${large ? "d-flex mb-5" : "row row-cols-1 mx-0 mb-4"}`}>
            {tags_array?.map((arr, index) => {
              return (
                <div
                  key={index}
                  className={`${large ? "mx-3 px-3" : "col me-2 mb-2"} text-primary body-text2 d-flex justify-content-center align-items-center`}
                  style={{
                    width: "auto",
                    height: 28,
                    borderRadius: 14,
                    backgroundColor: "#e6e7fa",
                  }}
                >
                  {arr}
                </div>
              )
            })}
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center overflow-hidden border-0"
          style={{
            maxWidth: 840,
            maxHeight: "auto",
            borderRadius: 30,
          }}
        >
          <Image
            className="w-100"
            src={mainBlogImage}
            alt="Pune Metro Image"
          />
        </div>
      </Container>
      {/* <Container className="py-1 user-select-none" style={{ maxWidth: 840 }}>
        <div
          className="my-5"
          dangerouslySetInnerHTML={{ __html: blogContent }}
        />
        <hr style={{ color: "#98A2B3" }} />
      </Container> */}
      <Container
        className="user-select-none"
        style={{ maxWidth: 840 }}
      >
        <div className={`d-flex justify-content-between ${large ? "" : "flex-column align-items-center"}`}>
          <div className="d-flex justify-content-start align-items-center mb-lg-0 mb-3">
            <div className="overflow-hidden" style={{ width: 50, height: 50, borderRadius: "50%" }}>
              <Image className="w-100" src={authorImage} alt="Ar. Prachi Kurle Headshot" style={{ objectFit: "cover" }} />
            </div>
            <div className="ms-3 d-flex flex-column justify-content-center align-items-center">
              <p className="subtitle m-0">Ar. Prachi Kurle</p>
              <div
                className="d-flex flex-column justify-content-between"
                style={{ fontSize: 12 }}
              >
                {publishedData}&nbsp;&nbsp;&nbsp;&nbsp;10 Minutes
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Button
                className="bg-white text-black poppins-500 me-1"
                onClick={copyToClipboard}
                style={{
                  paddingLeft: large ? 30 : 16,
                  paddingRight: large ? 30 : 16,
                  border: "1px solid #D0D5DD",
                  borderRadius: 30,
                  height: 48,
                }}
              >
                <FiCopy />
                {large && <span className="ms-2">Copy Link</span>}
              </Button>
            </OverlayTrigger>
            <WhatsappShareButton url={share_url}>
              <span
                className="d-flex justify-content-center align-items-center border mx-1"
                style={{ width: 48, height: 48, borderRadius: 24 }}
              >
                <FaWhatsapp size={20} color="#98A2B3" />
              </span>
            </WhatsappShareButton>
            <LinkedinShareButton url={share_url}>
              <span
                className="d-flex justify-content-center align-items-center border mx-1"
                style={{ width: 48, height: 48, borderRadius: 24 }}
              >
                <FaLinkedinIn size={20} color="#98A2B3" />
              </span>
            </LinkedinShareButton>
            <TwitterShareButton url={share_url}>
              <span
                className="d-flex justify-content-center align-items-center border mx-1"
                style={{ width: 48, height: 48, borderRadius: 24 }}
              >
                <FaXTwitter size={20} color="#98A2B3" />
              </span>
            </TwitterShareButton>
            <FacebookShareButton url={share_url}>
              <span
                className="d-flex justify-content-center align-items-center border mx-1"
                style={{ width: 48, height: 48, borderRadius: 24 }}
              >
                <FaSquareFacebook size={20} color="#98A2B3" />
              </span>
            </FacebookShareButton>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Blog;
