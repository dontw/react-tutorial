import React from 'react';

import Basic from './Basic';
import Props from './Props';
import Link from './Link';
import Attributes from './Attributes';
import Animation from './Animation';

import './app.css';

const App = () => (
  <main className="app">
    <div className="container">
      <Basic />
      <Props />
      <Link />
      <Attributes />
      <Animation />
    </div>
  </main>
);

export default App;
