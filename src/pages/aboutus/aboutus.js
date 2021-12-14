import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import MyNavbar from "../../components/mynavbar/mynavbar";
import TitleTextContainer from "../../components/title-text-container/title-text-container";
import Footer from "../../components/footer/footer";

import { selectText } from "../../redux/aboutus/aboutus.selectors";

import "./aboutus.css";
import "../../App.css";

const AboutUs = ({ text }) => {
  return (
    <div className="App">
      <div className="container-fluid mainHomePage">
        <MyNavbar />
        {text.map(({ id, ...otherProps }) => (
          <TitleTextContainer key={id} {...otherProps} />
        ))}
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  text: selectText,
});

export default connect(mapStateToProps)(AboutUs);
