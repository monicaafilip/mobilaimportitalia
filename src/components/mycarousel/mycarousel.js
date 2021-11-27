import React, { Component } from "react";

import { Carousel } from "react-bootstrap";

import "./mycarousel.css";

import firstImg from "../../assets/temporary/products/prod (1).jpeg";
import secondImg from "../../assets/temporary/products/prod (2).jpeg";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={firstImg} alt="First slide" />
          <Carousel.Caption>
            <h1 className="display-4 textCarousel h1VWSize">Modern Design</h1>
            <p className=" normalVWSize textCarousel">
              Mobilă second-hand import Italia
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={secondImg} alt="Second slide" />
          <Carousel.Caption>
            <h1 className="display-4 h1VWSize">Modern Design</h1>
            <button className="btn btn-success my-2 my-sm-0  productsBtn normalVWSize">
              Produse
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default MyCarousel;
