import React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloudMoon, faSun, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './constants/global';
import { ThemeManager } from './ThemeManager';

library.add(faCloudMoon, faSun, faSearchLocation);

render(
  <ThemeManager>
    <GlobalStyle />
    <App />
  </ThemeManager>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
