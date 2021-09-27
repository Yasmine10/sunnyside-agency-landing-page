import React from "react";

import imageEmily from "../../assets/images/image-emily.jpg";
import imageJennie from "../../assets/images/image-jennie.jpg";
import imageThomas from "../../assets/images/image-thomas.jpg";

export default function testimonialsSection() {
  return (
    <div id="testimonials" className="text-center">
      <div className="container padding-container">
        <h5 className="title text-uppercase text-light">Client testimonials</h5>
        <div className="testimonials-wrapper">
          <div>
            <img src={imageEmily} alt="Emily" />
            <p className="text-primary">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h5 className="client-name text-dark">Emily R.</h5>
            <small className="text-small text-light">Marketing director</small>
          </div>
          <div>
            <img src={imageThomas} alt="Thomas" />
            <p className="text-primary">
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>
            <h5 className="client-name text-dark">Thomas S.</h5>
            <small className="text-small text-light">Chief Operating Officer</small>
          </div>
          <div>
            <img src={imageJennie} alt="Jennie" />
            <p className="text-primary">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h5 className="client-name text-dark">Jennie F.</h5>
            <small className="text-small text-light">Business Owner</small>
          </div>
        </div>
      </div>
    </div>
  );
}
