import React from 'react';

import Password from './components/Password';
import RegionSelect from './components/RegionSelect';
import ImagePreview from './components/ImagePreview';
import FilterList from './components/FilterList';
import FilterListWithColor from './components/FilterListWithColor';
import MenuBar from './components/MenuBar';
import InfiniteScroll from './components/InfiniteScroll';
import ImageSlider from './components/ImageSlider';


import items from './data/repos.json';
import imgs from './data/streamers.json';

import './app.css';

const App = () => (
  <main className="app">
    <div className="container">
      {/* <Password /> */}
      <RegionSelect />
      {/* <ImagePreview /> */}
      {/* <FilterList items={items} /> */}
      {/* <FilterListWithColor items={items} /> */}
      {/* <MenuBar items={items} /> */}
      {/* <InfiniteScroll url="./mockAPI.txt" /> */}
      {/* <ImageSlider imgs={imgs} /> */}
    </div>
  </main>
);

export default App;
