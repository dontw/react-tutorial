import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import App from './App';

$(() => {
  console.log('jquery!');
});
(function doge() { console.log('doge'); }());
ReactDOM.render(<App />, document.getElementById('root'));
