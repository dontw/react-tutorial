import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => (
  <ul className="menu">
    <li className="menu-item"><NavLink to="/" exact>Home</NavLink></li>
    <li className="menu-item"><NavLink to="/vid/" >Video</NavLink></li>
    <li className="menu-item"><NavLink to="/About/" >About</NavLink></li>
  </ul>
);

export default Menu;
