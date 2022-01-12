import React from "react";
import "./media-object.css";

const MediaObjectLeft = () => {
  return (
    <div className="media-object">
      <div className="icon-left">
        <iframe
          title="Modern design cajvana"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.514826891853!2d26.004271950756422!3d47.69384158983909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734534a7bf7d84b%3A0x8586e04a327e5d00!2sModern%20design!5e0!3m2!1sen!2sro!4v1639141495742!5m2!1sen!2sro"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
      <div className="blurb-wrapper-right">
        <h3 className="blurb-header">Magazin Cajvana</h3>
        <div className="blurb-info">
          <h5>Adresă</h5>
          <p>Cajvana, nr 2058 jud. Suceava, Romania</p>
          <h5>Contact</h5>
          <p>
            <a className="phone-number" href="tel:+40746 086 433">
              +40746 086 433
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaObjectLeft;
