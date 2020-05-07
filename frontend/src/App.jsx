import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes.jsx';

const App = () => (
  <Router>
    <Routes />
    <p>Hello world!</p>
  </Router>
);

export default App;
