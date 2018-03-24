import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Overlay.css';

const Overlay = ({ match }) => (
  <div className="overlay">
    <div className="overlay-content">
      <iframe
        src={`http://www.youtube.com/embed/${match.params.id}?autoplay=1`}
        title="vid"
        frameBorder="0"
        autoPlay="1"
        width="1080"
        height="480"
      />
    </div>
    <Link to="/vid" className="closer">x</Link>
  </div>
);
export default Overlay;
