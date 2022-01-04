import React from "react";
import ReactGA from "react-ga";

import MyCarousel from "../../components/mycarousel/mycarousel";
import Footer from "../../components/footer/footer";
import MediaObjectLeft from "../../components/media-objects/media-object-left";
import MediaObjectRight from "../../components/media-objects/media-object-right";
import MyNavbar from "../../components/mynavbar/mynavbar";
import "./home.css";

const Home = (props) => {
  const pathname = props.match.path;

  let pageView;
  if (pathname === "*") pageView = "/not-found";
  else pageView = pathname;

  ReactGA.pageview(pageView);

  return (
    <div className="App">
      <div className="container-fluid mainHomePage">
        <MyNavbar />
        <MyCarousel />
        <MediaObjectLeft />
        <MediaObjectRight />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
