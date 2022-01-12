import React from "react";
import "./media-object.css";

const MediaObjectRight = () => {
  return (
    <div className="media-object">
      <div className="icon-right">
        <iframe
          title="Modern Design Danila"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.7623600972724!2d26.09203245075841!3d47.74726538614207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473457f90537e11d%3A0xd61a3443dbb6c15a!2sModern%20Design!5e0!3m2!1sen!2sro!4v1639141822473!5m2!1sen!2sro"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
      <div className="blurb-wrapper-left">
        <h3 className="blurb-header">Magazin Dănila</h3>
        <div className="blurb-info">
          <h5>Adresă</h5>
          <p>Dănila, str. Europeana jud. Suceava, Romania</p>
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

export default MediaObjectRight;
