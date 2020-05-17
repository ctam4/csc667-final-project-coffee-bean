import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { CookiesProvider } from 'react-cookie';
import reduxThunk from 'redux-thunk';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from '../src/App';
import reducers from '../src/reducers';

// Redux DevTools to monitor states
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk)),
);

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <CssBaseline />
        <App />
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('react-root'),
);
