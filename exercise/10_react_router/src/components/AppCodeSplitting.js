import React from 'react';
import Loadable from 'react-loadable';

// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Menu from './Menu';
import Footer from './Footer';
import Overlay from './Overlay';

const Loading = () => <div>Loading...</div>;
const About = Loadable({
  // 用註解方式取名
  loader: () => import(/* webpackChunkName: "About" */'./About'),
  loading: Loading,
});
const Videos = Loadable({
  loader: () => import(/* webpackChunkName: "Videos" */'./Videos'),
  loading: Loading,
});

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
