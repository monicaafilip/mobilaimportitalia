import React from "react";
import ReactGA from "react-ga";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home/home";
import AboutUs from "./pages/aboutus/aboutus";
import Directory from "./pages/directory/directory";

import "./App.css";

ReactGA.initialize("G-EPCWKYEL85");

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/acasa" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/desprenoi" component={AboutUs} />
          <Route exact path="/produse" component={Directory} />
        </Switch>
      </Router>
    );
  }
}

export default App;
