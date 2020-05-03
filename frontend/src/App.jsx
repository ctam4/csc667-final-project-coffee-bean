import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes.jsx';
import './App.css';

const App = () => (
  <Router>
    <Routes />
    <p>Hello world!</p>
  </Router>
);

export default App;
