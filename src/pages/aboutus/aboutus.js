import React from "react";
import ReactGA from "react-ga";

import MyNavbar from "../../components/mynavbar/mynavbar";
import Footer from "../../components/footer/footer";
import Divider from "../../components/divider/divider";

import "./aboutus.css";
import "../../App.css";

const AboutUs = (props) => {
  const pathname = props.match.path;

  let pageView;
  if (pathname === "*") pageView = "/not-found";
  else pageView = pathname;

  ReactGA.pageview(pageView);

  return (
    <div className="App">
      <div className="container-fluid mainHomePage">
        <MyNavbar />
        <div className="container leftAlignment">
          <Divider />
          <h1 className="display-5 title">Cine suntem?</h1>
          <p className="lead">
            Suntem o echipă de oameni, care a lucrat în industria mobilei în
            Italia, continuând și în România, momentan în zona Sucevei.
          </p>
          <Divider />

          <h1 className="display-5 title">Ce oferim?</h1>
          <p className="lead">
            Avem mobilă de vânzare, atât <b>nouă</b>, cât și{" "}
            <b>la mâna a doua</b>. Mobila este importată din Italia, iar câteva
            dintre mărcile cu care lucrăm sunt:
          </p>
          <ul className="categories">
            <li>Veneta Cucine</li>
            <li>Semeraro</li>
            <li>Ovvio</li>
            <li>Mondo Convenienza </li>
            <li>Mercatone 1</li>
          </ul>
          <p className="lead">
            Pe lângă mobilă de vânzare, avem și personal ce oferă{" "}
            <b>montajul</b>
            acesteia.
          </p>
          <Divider />

          <h1 className="display-5 title">
            De cât timp suntem pe piața din România?
          </h1>
          <p className="lead">
            În România vindem mobilă din <b>2018</b>, iar experiența din Italia
            depășește <b>15 ani</b>.
          </p>
          <Divider />

          <h1 className="display-5 title">De ce să cumperi de la noi?</h1>
          <p className="lead">
            Mobila pe care o vindem noi este de <b>calitate foarte bună</b>,
            avem <b>modele deosebite</b>, iar <b>prețurile sunt foarte bune</b>.
          </p>
        </div>
        <Divider />

        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
