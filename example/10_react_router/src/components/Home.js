import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div className="home-root">
    <div className="jumbotron">
      <h3 className="display-3">Hello React</h3>
      <NavLink to="/about">About</NavLink>
    </div>
  </div>
);

export default Home;
