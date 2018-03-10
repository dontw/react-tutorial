import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Menu from './Menu';
import Videos from './Videos';
import About from './About';
import Footer from './Footer';
import Overlay from './Overlay';

const App = () => (
  <Router>
    <div className="app" id="top">
      <div className="container">
        <Menu />
        <Route path="/" exact component={Home} />
        <Route path="/vid" component={Videos} />
        <Route path="/vid/:id" component={Overlay} />
        <Route path="/about" exact component={About} />
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
