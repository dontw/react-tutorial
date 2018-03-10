import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => (
  <nav>
    <ul className="menu">
      <li className="menu-item"><NavLink to="/">Home</NavLink></li>
      <li className="menu-item"><NavLink to="/vid">Videos</NavLink></li>
      <li className="menu-item"><NavLink to="/about">About</NavLink></li>
    </ul>
  </nav>
);

export default Menu;
