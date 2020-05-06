import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react-root')
);
