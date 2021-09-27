import React from "react";

import graphicDesignMobile from "../../assets/images/mobile/image-graphic-design.jpg";
import graphicDesignDesktop from "../../assets/images/desktop/image-graphic-design.jpg";
import photographyMobile from "../../assets/images/mobile/image-photography.jpg";
import photographyDesktop from "../../assets/images/desktop/image-photography.jpg";

export default function servicesSection() {
  return (
    <div id="services">
      <div className="inside-img-container ">
        <img
          src={graphicDesignMobile}
          srcSet={`${graphicDesignMobile} 1439w, ${graphicDesignDesktop} 1441w`}
          alt="Two cherries"
        />
        <div className="inside-img-text container padding-container text-center text-accent">
          <h3 className="title">Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client's
            attention.
          </p>
        </div>
      </div>
      <div className="inside-img-container">
        <img
          src={photographyMobile}
          srcSet={`${photographyMobile} 1439w, ${photographyDesktop} 1441w`}
          alt="Orange"
        />
        <div className="inside-img-text container padding-container text-center text-accent-blue">
          <h3 className="title">Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image
          </p>
        </div>
      </div>
    </div>
  );
}
