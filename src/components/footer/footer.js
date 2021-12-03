import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row py-3">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img src="img/logo.png" alt="" width="180" className="mb-3" />
            <p className="font-italic text-muted">
              Modern Design <br/> Mobilă nouă și second-hand import Italia.
            </p>
            <ul className="list-inline mt-4">
              <li className="list-inline-item">
                <i className="fa fa-facebook"></i>
              </li>
              <li className="list-inline-item">
                <a href='https://pin.it/6PmlJa4'>
                  <i className="fa fa-pinterest"/>
                </a>
              </li>
            </ul>
          </div>
          <div className="col"></div>
          <div className="col-lg-4 col-md-6 mb-lg-0 text-white">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3"></i> Cajvana, nr 2058, Suceava,
              România
            </p>
            <p>
              <i className="fa fa-envelope mr-3"></i> moderndesign.importitalia@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3"></i> +40746 086 433
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
