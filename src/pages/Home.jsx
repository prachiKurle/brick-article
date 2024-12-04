import React, { useState } from "react";
import { Container, Image, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { FiCopy } from "react-icons/fi";
import { FaLinkedinIn, FaSquareFacebook, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { kohinoorGroup, puneMetroMap, toiStats, toiImage, prachiKurle } from "assets";

const Blog = () => {
  const large = useMediaQuery({ query: "(min-width: 992px)" });
  const tags_array = ["Pune", "Metro", "Real Estate Surge"]
  const publishedData = "4th Dec 2024"
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
      <Container className="mt-lg-5 pt-5 user-select-none d-flex flex-column justify-content-center align-items-center" style={{ maxWidth: 900 }}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="lora-800" style={{ color: "#666666"}}>
            Creative Writing
          </div>
          <div className="mb-4 page-header d-flex justify-content-center align-items-center text-center">
            Project Writing: Pune Metro Rail Project
          </div>
          <div className={`${large ? "d-flex mb-5" : "row row-cols-1 mx-0 mb-4"}`}>
            {tags_array?.map((arr, index) => {
              return (
                <div
                  key={index}
                  className={`${large ? "mx-3 px-3" : "col me-2 mb-2"} text-primary body-text2 d-flex justify-content-center align-items-center bg-tertiary`}
                  style={{
                    width: "auto",
                    height: 28,
                    borderRadius: 14,
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
            maxWidth: 900,
            maxHeight: "auto",
            borderRadius: 30,
          }}
        >
          <Image
            className="w-100"
            src={toiImage}
            alt="Times of India Image"
          />
        </div>
        <div className="w-100 my-3" style={{textAlign: "left"}}>
          <span style={{ color: "#666666" }}>by</span>
          <span style={{ color: "red" }}> Ar. Prachi Kurle & Ar. Vishakha Paygude </span>
          <span style={{ color: "#666666" }}>on 04 November 2024</span>          
        </div>
        <div style={{textAlign: "left"}}>
          <b>Summary</b>: The 43.8-kilometer extension of Pune Metro Phase 2 is transforming the city's real 
          estate landscape. This development is enhancing connectivity and enormously boosting property 
          prices, especially in eastern pockets like Kharadi, Viman Nagar, Wagholi, and Hadapsar-Mundhwa. 
          The rapid development of Wagholi and Hadapsar-Mundhwa are backed by metro connectivity and higher 
          FSI allowances, while Kharadi and Viman Nagar are all set to become elite residential and 
          commercial hubs. Residential and commercial properties are booming, especially in areas around 
          Metro stations. Establishing Pune as a metro-connected city, the new initiative ensures high returns 
          in strategic centers for investors
        </div>
      </Container>
      <Container className="py-1 user-select-none" style={{ maxWidth: 900 }}>
        <hr style={{ color: "#98A2B3" }} />
        <div style={{ textAlign: 'justify' }}>
          Pune’s real estate market is undergoing a transformative shift, largely driven by the rapid 
          expansion of the Pune Metro Phase 2 project. As new Metro corridors are unveiled, areas once 
          considered peripheral are now emerging as vibrant residential and commercial hubs. In particular, 
          the eastern regions of the city, including Kharadi, Viman Nagar, Wagholi, and Hadapsar-Mundhwa, 
          are seeing an unprecedented surge in property values, with investors and homebuyers taking note 
          of the growing opportunities.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          Metro Phase 2, which spans 43.8 km, is not only enhancing the city’s connectivity but also reshaping 
          its urban landscape. With property prices in key locations appreciating by as much as 25%, these areas 
          are quickly becoming the new epicenters of Pune’s real estate boom. But what’s driving this surge, 
          and which areas are poised to see the most growth in the coming years?
        </div>

        <h5 className="mt-5">Key Areas Seeing Real Estate Growth: The Impact of Metro Connectivity</h5>
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
            src={puneMetroMap}
            alt="Pune Metro Map"
          />
        </div>
        <i className="w-100 mt-1" style={{textAlign: "left", maxWidth: 800}}>Credits: Pune Metro</i>

        <div className="mt-3" style={{ textAlign: 'justify' }}>
          The completion of the Metro Phase 2 expansion has spurred significant interest from both residential 
          and commercial developers, triggering a sharp rise in property prices along the new corridors. Here’s 
          a closer look at the standout regions benefiting from this transformation:
        </div>

        <h5 className="mt-5">Kharadi: Pune’s IT Powerhouse</h5>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          Once a quiet suburb, Kharadi has rapidly emerged as the city’s primary IT hub, and Metro connectivity 
          has further fueled its real estate growth. Property prices here have surged by 18-22% since the announcement 
          of the Metro project, with premium residential properties now commanding rates between Rs 7,500-8,900 per 
          square foot, up from Rs 6,200-7,200 per square foot in early 2023.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          Kharadi’s proximity to the airport, IT parks, and the Metro makes it an ideal location for both residential 
          and commercial developments. The dual Metro corridors (one operational and another under construction) are 
          driving up demand for luxury housing and transit-oriented developments, making it a hotspot for investors.
        </div>

        <h5 className="mt-5">Viman Nagar: Premium Living with Elevated Connectivity</h5>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          Viman Nagar continues to be one of Pune’s most desirable locales. Known for its upscale residential developments, 
          Viman Nagar is benefiting from enhanced connectivity through Metro Phase 2. In recent months, property prices 
          in this area have soared, reaching Rs 9,500-11,000 per square foot in some of the city’s most sought-after locations.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          The combination of luxury residential projects, proximity to Pune International Airport, and easy access to 
          the Metro makes Viman Nagar especially attractive to professionals and Non-Resident Indians (NRIs) seeking 
          high-end homes and investment opportunities. The area’s established retail infrastructure further elevates its appeal.
        </div>

        <h5 className="mt-5">Wagholi: Affordable Housing to Luxury Living</h5>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          Once considered an affordable alternative to Kharadi, Wagholi has transformed into a prime real estate hotspot. 
          Thanks to the proposed Metro station, property prices in the area have risen by as much as 25%, especially in 
          the most sought-after pockets. With ongoing residential developments focusing on premium housing, prices have 
          now reached Rs 6,800 to Rs 7,500 per square foot.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          Wagholi’s rapid urbanization is attributed to both its growing residential demand and the imminent Metro 
          connectivity, which has attracted developers eager to cater to the emerging middle and upper-middle-class buyers. 
          The area’s transformation from a budget housing enclave to a luxury residential market highlights the impact of 
          infrastructure improvements on real estate values.
        </div>

        <h5 className="mt-5">Hadapsar-Mundhwa: From Industrial to Residential and Commercial Growth</h5>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          The Hadapsar-Mundhwa belt, traditionally known for its industrial base, is another area reaping the rewards of 
          Metro connectivity. This region has seen property prices increase by 15-20% annually, driven by a combination 
          of new residential projects and commercial expansions. The growing presence of IT parks and the influx of retail 
          and hospitality developments are helping turn Hadapsar-Mundhwa into a key real estate destination.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          With new residential projects featuring state-of-the-art amenities and an influx of commercial spaces catering 
          to the tech sector, the region is quickly gaining favor among buyers and investors. Metro connectivity is 
          expected to continue fueling demand, making this area a long-term growth prospect.
        </div>

        <div
          className="mt-5 d-flex justify-content-center align-items-center overflow-hidden border-0"
          style={{
            maxWidth: 840,
            maxHeight: "auto",
            borderRadius: 30,
          }}
        >
          <Image
            className="w-100"
            src={toiStats}
            alt="Times of India stats"
          />
        </div>
        <i className="w-100 mt-1" style={{textAlign: "left", maxWidth: 800}}>Credits: TOI</i>

        <h5 className="mt-5">The Role of Higher FSI in Driving Development</h5>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          One of the most significant drivers of this real estate boom is the higher <b>Floor Space Index (FSI) </b>
          allowed in certain areas along the Metro corridors. Higher FSI permits developers to build taller 
          structures and increase the density of developments, leading to an uptick in the availability of both 
          residential and commercial properties.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          This has resulted in a shift toward luxury and mixed-use developments, particularly in areas such as
          <b> Kharadi</b>, <b>Wagholi</b>, and <b>Hadapsar</b>. The combination of increased FSI and strategic Metro 
          corridors allows developers to maximize the potential of prime plots, creating high-value properties with 
          better amenities and improved living conditions.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          As these areas embrace taller structures and mixed-use developments, the demand for premium office spaces 
          and luxury housing continues to rise. Kharadi and Viman Nagar, with their proximity to major IT hubs, are 
          particularly benefiting from this trend.
        </div>

        <h5 className="mt-5">Is Commercial Real Estate Also Benefiting from the Metro Expansion?</h5>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          While residential real estate continues to dominate the conversation, the commercial sector is also 
          seeing significant growth. Areas like <b>Kharadi</b>, <b>Viman Nagar</b>, and <b>Hadapsar</b> are witnessing 
          a surge in demand for office spaces, with rental rates in Grade A commercial properties reaching Rs 85-95 per 
          square foot.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          With Pune’s IT and ITeS industries driving employment, these office spaces are in high demand, and the Metro’s 
          enhanced connectivity is making these locations even more attractive to businesses. The retail sector is also 
          benefiting, particularly in locations within 500 meters of Metro stations, where national and international 
          brands are eager to establish a presence.
        </div>

        <h5 className="mt-5">Long-Term Prospects: What Does the Future Hold?</h5>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          As Pune Metro Phase 2 continues to reshape the city’s real estate landscape, areas like <b>Kharadi Extension</b>, 
          <b> Wagholi-Pune Nagar Road</b>, and the <b>Mundhwa Business District</b> are expected to generate high returns 
          over the next three to five years. The Metro’s role in connecting key commercial hubs and residential 
          neighborhoods will continue to fuel growth in these emerging zones, while the demand for both residential 
          and commercial properties is expected to remain strong.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          For real estate investors and homebuyers, the opportunities are clear. Areas along the Metro corridors are ripe 
          for growth, but careful consideration of project timelines, developer credibility, and market dynamics is crucial. 
          As Pune continues to evolve into a metro-connected metropolis, those who invest in the right locations and at the 
          right time will see substantial returns in the coming years.
        </div>

        <h4 className="mt-5">Conclusion: A New Era for Pune’s Real Estate Market</h4>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          The ongoing development of Pune Metro Phase 2 is more than just an infrastructure project; it is a catalyst 
          for change in the city’s real estate market. By unlocking new corridors and enhancing connectivity, 
          Metro Phase 2 is driving up property values, making previously underdeveloped areas highly desirable. For 
          investors, developers, and homebuyers alike, the expanding Metro network presents a wealth of opportunities 
          in some of Pune’s most promising real estate regions. The future of Pune’s property market is looking bright, 
          with sustained growth expected in the coming years.
        </div>

        <div
          className="mt-3 d-flex justify-content-center align-items-center overflow-hidden border-0"
          style={{
            maxWidth: 840,
            maxHeight: "auto",
            borderRadius: 30,
          }}
        >
          <Image
            className="w-100"
            src={toiImage}
            alt="Times of India Image"
          />
        </div>
        <i className="w-100 mt-1" style={{textAlign: "left", maxWidth: 800}}>Credits: TOI</i>

        <div className="my-5" style={{ color: "red" }}>
          North-East Pune has emerged as a standout performer in the city’s real estate market, witnessing a 
          remarkable 73% increase in the value of units sold in 2023 compared to 2019. This surge reflects a robust 
          compound annual growth rate (CAGR) of 15% in total unit sales value over the past four years, highlighting the 
          growing demand and investment potential in the region
        </div>

        <hr style={{ color: "#98A2B3" }} />
      </Container>
      <Container
        className="user-select-none"
        style={{ maxWidth: 840 }}
      >
        <div className={`d-flex justify-content-between ${large ? "" : "flex-column align-items-center"}`}>
          <div className="d-flex justify-content-start align-items-center mb-lg-0 mb-3">
            <div className="overflow-hidden" style={{ width: 50, height: 50, borderRadius: "50%" }}>
              <Image className="w-100" src={prachiKurle} alt="Ar. Prachi Kurle Headshot" style={{ objectFit: "cover" }} />
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
                className="bg-white text-black lora-500 me-1"
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
        <div className="mt-5">
          References:
        </div>
        <ol>
          <li>
            <a
              href="https://www.indextap.com/blog/pune-housing-market-soars-to-new-heights-in-cy23-a-comprehensive-report-on-trends-growth-and-future-prospects/"
              target="blank"
            >
              https://www.indextap.com/blog/pune-housing-market-soars-to-new-heights-in-cy23-a-comprehensive-report-on-trends-growth-and-future-prospects/
            </a>
          </li>
          <li>
            <a
              href="https://www.timesnownews.com/business-economy/real-estate/eastern-pune-sees-real-estate-boom-with-metro-phase-2-development-article-115599702"
            >
              https://www.timesnownews.com/business-economy/real-estate/eastern-pune-sees-real-estate-boom-with-metro-phase-2-development-article-115599702
            </a>
          </li>
          <li>
            <a
              href="https://royalresidencies.com/eastern-pune-witnesses-real-estate-surge-amid-metro-phase-2-expansion/"
            >
              https://royalresidencies.com/eastern-pune-witnesses-real-estate-surge-amid-metro-phase-2-expansion/
            </a>
          </li>
          <li>
            <a
              href="https://www.indextap.com/blog/pune-housing-market-soars-to-new-heights-in-cy23-a-comprehensive-report-on-trends-growth-and-future-prospects/"
            >
              https://www.indextap.com/blog/pune-housing-market-soars-to-new-heights-in-cy23-a-comprehensive-report-on-trends-growth-and-future-prospects/
            </a>
          </li>
        </ol>
      </Container>
    </Container>
  );
};

export default Blog;
