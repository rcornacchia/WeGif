import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';
import DevTools from './containers/DevTools';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
