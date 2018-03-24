import React, { Component } from 'react';
import Box from './Box';

const boxes = [
  { id: 1, vid: 'I6BZYNS_u18', img: 'https://i.ytimg.com/vi/g2ag8t7AvX8/maxresdefault.jpg' },
  { id: 2, vid: 'I6BZYNS_u18', img: 'https://i.ytimg.com/vi/g2ag8t7AvX8/maxresdefault.jpg' },
  { id: 3, vid: 'I6BZYNS_u18', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJrDztcGCbyRwE8IdShGupz-1g9G4kinBmDHX0RvNai2P0N4O4A' },
];

const Videos = () => (
  <div className="videos-root">
    <div className="row">
      {
        boxes.map(box => (
          <Box {...box} key={box.id} />
        ))
      }
    </div>
  </div>
);

export default Videos;
