import React, { useState } from "react";
import { Container, Image, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { FiCopy } from "react-icons/fi";
import { FaLinkedinIn, FaSquareFacebook, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { kohinoorGroup, puneMetroMap, toiStats, toiImage, magicBricks, websiteLogo, prachiKurle, vishakhaPaygude } from "assets";

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
            borderRadius: 10,
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
        <div style={{textAlign: "justify"}}>
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
        <div className="mt-5 mb-4 d-flex flex-column justify-content-center align-items-center">
          <div className="quicksand">THIS WEEK’S</div>
          <b className="quicksand">TOP STORIES</b>
        </div>
        <h3>A Catalyst for Unprecedented Growth in the City’s Housing Market</h3>
        <div
          className="mt-3 d-flex justify-content-center align-items-center overflow-hidden border-0"
          style={{
            maxWidth: 840,
            maxHeight: "auto",
            borderRadius: 10,
          }}
        >
          <Image
            className="w-100"
            src={magicBricks}
            alt="Pune Metro"
          />
        </div>
        <div className="w-100 mt-1" style={{ textAlign: "left", maxWidth: 800, color: "#666666" }}>Credits: Magic Bricks</div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          The real estate market in Pune is witnessing a transformative change, driven largely by rapid Pune 
          Metro Phase 2 project expansion. New Metro corridors also mean what were once peripheral locations are 
          becoming prime residential and commercial spaces. The price growth opportunity here is making all the 
          right noises in the property market - with investors, home buyers buzzing freely in the most searched 
          towns across eastern parts of the city such as Kharadi, Viman Nagar, Wagholi and Hadapsar-Mundhwa.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          Besides improving connectivity of the city, Metro Phase 2 is also transforming the urban landscape. With 
          property prices in prime locations appreciating substantially to the extent of almost 25%, these sectors 
          are becoming the new epicenter of Pune’s real estate boom.
        </div>

        <h3 className="mt-5">Key Areas Seeing Real Estate Growth:</h3>
        <h5 className="my-3" style={{ color: "#666666" }}>
          The impact of Metro Connectivity
        </h5>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          Property prices are skyrocketing in the new corridors opened up by Metro Phase 2, thanks in no small part 
          to metro's operationalization on this corridor which generated massive interest among both residential and 
          commercial property developers. Here’s a closer look at the red-hot regions cashing in on this shift:
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
            src={puneMetroMap}
            alt="Pune Metro Map"
          />
        </div>
        <div className="w-100 mt-1" style={{ textAlign: "left", maxWidth: 800, color: "#666666" }}>Credits: Pune Metro</div>

        <div className="mt-3" style={{ textAlign: 'justify' }}>
          The completion of the Metro Phase 2 expansion has spurred significant interest from both residential 
          and commercial developers, triggering a sharp rise in property prices along the new corridors. Here’s 
          a closer look at the standout regions benefiting from this transformation:
        </div>

        <h3 className="mt-5">Kharadi:</h3>
        <h5 className="my-3" style={{ color: "#666666" }}>
          Pune’s <span style={{ color: "red" }}>IT Powershouse</span>
        </h5>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          Kharadi, once a sleepy suburb, has rapidly risen to become the city’s chief IT node, and Metro connectivity 
          has added fuel to the real estate boom. Prices of properties in this area have increased 18-22% since the 
          announcement of the Metro project, and premium residential properties are being sold at rates of Rs 7,500-8,900 
          per square foot compared to Rs 6,200-7,200 per square foot earlier this 2023.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          Its location near the airport, IT parks, and the Metro makes it suitable for residential and commercial projects 
          as well. Several dual Metro corridors (one operational and another under construction) are providing a major boost 
          to demand for luxury housing and transit oriented developments, making it a lucrative investment destination.
        </div>

        <h3 className="mt-5">Viman Nagar:</h3>
        <h5 className="my-3" style={{ color: "#666666" }}>
          <span style={{ color: "red" }}>Luxurious Living</span> with better connectivity
        </h5>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          Viman Nagar remains one of the most sought-after neighborhoods in the city of Pune. Well-developed 
          residential projects across the region coupled with enhanced Metro Phase 2 connectivity has worked 
          out well for Viman Nagar. Barring few areas in the city’s upscale and prime location, this region 
          has witnessed a tremendous increase in property values with prices positioned between Rs 9500 Rs 
          11000 per square foot.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          The feature of combining elite residential complexes with close proximity to Pune international 
          airport as well as having hassle free connectivity to the Metro makes Viman Nagar appealing to 
          professionals and NRIs looking out for premium housing and investment options.
        </div>

        <h3 className="mt-5">Wagholi:</h3>
        <h5 className="my-3" style={{ color: "#666666" }}>
          <span style={{ color: "red" }}>Affordable Housing</span> To Luxury Living
        </h5>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          Wagholi, once regarded as a budget option when compared to Kharadi, has now turned out to be one 
          of the desirable locations. As a result of the planned Metro station, property prices in the region 
          have surged by as much as 25%, particularly in the areas that are most in demand. With most of the 
          current developments in residential structures trying to cater for high-end housing, the cost is 
          currently in the ranges of 6,800 Rs to 7,500 Rs per square foot.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          The expansion in Wagholi of urban settlement is as a result of residential preferences and the fact 
          that there will be Metro rail which brought in developers who sought to target middle and lower 
          middle-class buyers. The shift in the region from a low-cost housing zone to a high-end residential 
          area shows the benefits of investment on infrastructure in an area on the prices of real estates.
        </div>

        <h3 className="mt-5">Hadapsar-Mudhwa</h3>
        <h5 className="my-3" style={{ color: "#666666" }}>
          <span style={{ color: "red" }}>From Factory Setting</span> to Densely Populated Townships and Commercial Centres
        </h5>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          The Hadapsar-Mundhwa belt, which has been primarily doomed as an industrial belt, is another area 
          benefiting from Metro connectivity. For this reason, the last few years have recorded consistent 
          annual capital appreciation of real estate values in this area by 15-20%. The increasing number of 
          housing projects in this region and the expansion of these areas into commercial zones also account 
          for growth. Hadapsar-Mundhwa’s transformation into a key real estate market is assisted by the 
          increasing development of IT parks accompanied by the growth of retail and hospitality projects.
        </div>

        <div
          className="mt-5 d-flex justify-content-center align-items-center overflow-hidden border-0"
          style={{
            maxWidth: 840,
            maxHeight: "auto",
            borderRadius: 10,
          }}
        >
          <Image
            className="w-100"
            src={toiStats}
            alt="Times of India stats"
          />
        </div>
        <div className="w-100 mt-1" style={{ textAlign: "left", maxWidth: 800, color: "#666666" }}>Credits: TOI</div>

        <h3 className="mt-5">Effect on increased FSI on Development:</h3>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          One of the major factors which has contributed to this real estate boom is the increasing the Floor 
          space Index FSI in certain regions along the Metro corridors. An increase in FSI enables the developers 
          to construct higher buildings and make the development of the area denser which results in an 
          increase in both residential and commercial developments in that area.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          This has caused a shift towards more concentrated luxury and mixed projects in places like Kharadi, 
          Wagholi and Hadapsar. The presence of higher FSI alongside the planning of the Metro corridors means 
          that the higher the value for the developers of these sites, who eventually deliver better quality 
          and quantity of housing and services.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          With these areas moving to taller buildings and mixed developments, the appetite for premium office 
          and luxury homes remains robust. Kharadi and Viman Nagar, owing to their close range to the core IT 
          hubs are gaining positively from this trend.
        </div>

        <h3 className="mt-5">Is Commercial real estate also experiencing positive effects from the metro expansion?</h3>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          While residential real estate remains the main topic of discussion, the commercial sector is also 
          experiencing substantial growth. Locations such as Kharadi, Viman Nagar, and hadapsar are experiencing 
          a significant increase in demand for office spaces, resulting in rental rates for grade A commercial 
          properties reaching Rs 85-95 per square foot.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          With the growth of industries in Pune and its surrounding areas, there is a high demand for office 
          spaces. The improved connectivity of the metro is making these locations even more appealing to businesses. 
          The retail industry is experiencing growth, especially in areas close to metro stations, where both 
          national and international brands are actively seeking opportunities to set up shop.
        </div>

        <h3 className="mt-5">Long-Term Prospects: What does the Future Hold?</h3>
        <div
          className="mt-3 d-flex justify-content-center align-items-center overflow-hidden border-0"
          style={{
            maxWidth: 840,
            maxHeight: "auto",
            borderRadius: 10,
          }}
        >
          <Image
            className="w-100"
            src={kohinoorGroup}
            alt="Pune Metro Train"
          />
        </div>
        <div className="w-100 mt-1" style={{ textAlign: "left", maxWidth: 800, color: "#666666" }}>Credits: Kohinoor Group</div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          As Pune metro phase 2 continues to reshape the city's real estate landscape, areas like Kharadi 
          extension, wagholi-pune nagar road, and the Mundhwa business district are expected to generate high 
          returns over the next three to five years. The metro's function in linking important commercial 
          centers and residential areas will continue to drive expansion in these developing zones.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          Real estate investors and homebuyers can easily see the advantages. The regions adjacent to the 
          metro areas hold great potential for expansion, but it is essential to carefully evaluate project 
          timelines, the credibility of developers, and the prevailing market conditions before proceeding. 
          As Pune transforms into a well-connected metropolitan city, individuals who make wise investments 
          in the appropriate areas and at the opportune moment will reap significant profits in the future.
        </div>
        <div className="mt-3" style={{ textAlign: 'justify' }}>
          The ongoing construction of the second phase of the pune metro is not just about building a 
          transportation system, it is a driving force for transformation in the city's real estate sector. 
          By creating new pathways and improving connectivity, metro phase 2 is increasing property values, 
          transforming previously neglected areas into highly sought-after locations. Investors, developers, 
          and homebuyers can all benefit from the expanding metro network in Pune's most promising real 
          estate regions. The outlook for Pune's property market is promising, with a projected increase 
          in growth over the next few years.
        </div>

        <h4 className="mt-4">
          References:
        </h4>
        <ol>
          <li>
            <a
              className="w-100"
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

        <div className="my-5 d-flex flex-column justify-content-center align-items-center">
          <Image className="mb-4" src={websiteLogo} alt="Website Logo" />
          <div className="text-center">
            Project Writing (Word Count: 1192)
          </div>
          <div className="text-center">
            SMEF’s BRICK School Of Architecture
          </div>
        </div>

        <hr style={{ color: "#98A2B3" }} />
      </Container>
      <Container
        className="user-select-none"
        style={{ maxWidth: 840 }}
      >
        <div className={`d-flex justify-content-between ${large ? "" : "flex-column align-items-center"}`}>
          <div className="d-flex flex-column justify-content-center align-items-center mb-lg-0 mb-3">
            <div className="overflow-hidden" style={{ width: 200, height: 200, borderRadius: "10px" }}>
              <Image className="w-100" src={prachiKurle} alt="Ar. Prachi Kurle Headshot" style={{ objectFit: "cover" }} />
            </div>
            <p className="subtitle m-0">Ar. Prachi Kurle</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mb-lg-0 mb-3">
            <div className="overflow-hidden" style={{ width: 200, height: 200, borderRadius: "10px" }}>
              <Image className="w-100" src={vishakhaPaygude} alt="Ar. Vishakha Paygude Headshot" style={{ objectFit: "cover" }} />
            </div>
            <p className="subtitle m-0">Ar. Vishakha Paygude</p>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-center align-items-center">
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
      </Container>
    </Container>
  );
};

export default Blog;
