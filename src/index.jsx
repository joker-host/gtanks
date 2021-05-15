import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js/App';
import Player from "../src/vendor/Player";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Player id="player" file="https://plrjs.com/sample.mp4"/>
  </React.StrictMode>,
  document.getElementById('root')
);
