import React from 'react';

import MyNavbar from '../../components/mynavbar/mynavbar';
import TitleTextContainer from '../../components/title-text-container/title-text-container';
import Footer from '../../components/footer/footer';
import Divider from '../../components/divider/divider';

import './aboutus.css';
import '../../App.css';

const AboutUs = () => {
  return (
    <div className="App">
        <div className="container-fluid mainHomePage">
        <MyNavbar/>
        <TitleTextContainer/>
        <Divider/>
        <TitleTextContainer/>
        <Divider/>
        <Footer/>
        </div>
    </div>
  );
}

export default AboutUs;
