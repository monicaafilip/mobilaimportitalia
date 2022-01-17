import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import { Carousel } from "react-bootstrap";

import "./mycarousel.css";

import firstImg from "../../assets/temporary/products/prod (1).jpeg";
import secondImg from "../../assets/temporary/products/prod (2).jpeg";

function MyCarousel(st) {
  const history = useHistory();
  const routeChange = () => {
    let path = "/produse";
    history.push(path);
  };
  const salesProducts = st.state.prods.products.filter((product) =>
    product.filter.includes("reduceri")
  );

  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={firstImg} alt="First slide" />
        <Carousel.Caption>
          <h1 className="display-4 h1VWSize">Modern Design</h1>
          <p className=" normalVWSize">
            Mobilă nouă și second-hand import Italia
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={secondImg} alt="Second slide" />
        <Carousel.Caption>
          <h1 className="display-4 h1VWSize">Modern Design</h1>
          <button
            className="btn btn-success my-2 my-sm-0  productsBtn normalVWSize"
            onClick={routeChange}
          >
            Produse
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      {salesProducts.map((product) => (
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={product.imageUrl} alt="slide" />
          <Carousel.Caption>
            {" "}
            <h1 className="display-4 h1VWSize">Mobilă la reducere!</h1>
            <a className="phone-number" href="tel:+40746 086 433">
              Rezervă în magazin!
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(MyCarousel);
