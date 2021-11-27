import React from "react";
import MyCarousel from "../../components/mycarousel/mycarousel";
import Footer from "../../components/footer/footer";
import MediaObjectLeft from "../../components/media-objects/media-object-left";
import MediaObjectRight from "../../components/media-objects/media-object-right";
import MyNavbar from "../../components/mynavbar/mynavbar";
import "./home.css";

const Home = () => {
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
