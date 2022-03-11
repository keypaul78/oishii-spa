import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import lazySizes from 'lazysizes';

import App from './App';

import fields from './data/content.json';

Object.assign(lazySizes.cfg, {
  lazyClass: 'lazy',
});

ReactDOM.render(
  <BrowserRouter basename={fields.basePath}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
