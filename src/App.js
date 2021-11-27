import React from 'react';
import { 
  HashRouter as Router,
  Route, 
  Switch
 } from 'react-router-dom';
 
import Home from './pages/home/home';
import AboutUs from './pages/aboutus/aboutus';
import Directory from './pages/directory/directory';

import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/acasa" component={Home} />
        <Route exact path="/" component={Home}/>
        <Route exact path="/desprenoi" component={AboutUs} />
        <Route exact path="/produse" component={Directory} />
		  </Switch>
    </Router>
  );
}

export default App;
