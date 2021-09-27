import React from "react";

import Navbar from "../components/Navbar";

import imageHeaderMobile from "../assets/images/mobile/image-header.jpg";
import imageHeaderDesktop from "../assets/images/desktop/image-header.jpg";
import arrowDownIcon from "../assets/images/icon-arrow-down.svg";

export default function header() {
  return (
    <>
      <div>
        <div id="header">
          <img
            className="header-img"
            src={imageHeaderMobile}
            srcSet={`${imageHeaderMobile} 1439w, ${imageHeaderDesktop} 1441w`}
            alt="Half of an orange"
          />
          <div className="header-content">
            <Navbar />
            <div className="container padding-container">
              <h1 className="text-uppercase text-white">We are creatives</h1>
              <img
                className="arrow-down-icon"
                src={arrowDownIcon}
                alt="Arrow down icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
