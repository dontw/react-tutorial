import React from 'react';
import { Link } from 'react-router-dom';

import './box.css';

const Box = ({ vid, img }) => (
  <div className="col-6 box">
    <Link className="image" to={`/vid/${vid}`}>
      <img src={img} alt="" />
    </Link>
    <div className="inner">
      <h3>Video Title</h3>
      <p>description</p>
      <Link className="btn btn-primary fit" to={`/vid/${vid}`}>Watch</Link>
    </div>
  </div>
);

export default Box;
