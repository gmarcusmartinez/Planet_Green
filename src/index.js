import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App/App';
import './styles/index.scss';
import history from './core/history';
import { store, persistor } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);
