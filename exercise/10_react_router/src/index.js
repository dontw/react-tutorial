import React from 'react';
import { render } from 'react-snapshot';
// import ReactDOM from 'react-dom';
import App from './components/App';
// 可分多隻js分部分讀取
// import App from './components/AppCodeSplitting';

render(<App />, document.getElementById('root'));
