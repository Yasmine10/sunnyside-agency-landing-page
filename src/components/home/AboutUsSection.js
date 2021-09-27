import React from "react";

import transformMobile from "../../assets/images/mobile/image-transform.jpg";
import transformDesktop from "../../assets/images/desktop/image-transform.jpg";
import standOutMobile from "../../assets/images/mobile/image-stand-out.jpg";
import standOutDesktop from "../../assets/images/desktop/image-stand-out.jpg";

export default function aboutUsSection() {
  return (
    <>
      <div>
        <div id="about-us">
          <div className="about-us-section">
            <img
              src={transformMobile}
              srcSet={`${transformMobile} 1439w, ${transformDesktop} 1441w`}
              alt="Egg"
            />
            <div className=" container padding-container text-center text-dark">
              <h2 className="title">Transform your brand</h2>
              <p className="text-lighter">
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <a href="#noting" className="yellow-learn-more-btn text-uppercase">
                Learn more
              </a>
            </div>
          </div>
          <div className="about-us-section">
            <img
              src={standOutMobile}
              srcSet={`${standOutMobile} 1439w, ${standOutDesktop} 1441w`}
              alt="Pink plastic glass with foot"
            />
            <div className=" container padding-container text-center text-dark">
              <h2 className="title">Stand out to the right audience</h2>
              <p className="text-lighter">
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we'll build and
                extend your brand in digital places.
              </p>
              <a href="#noting" className="orange-learn-more-btn text-uppercase">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
