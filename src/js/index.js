import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store/store';

import '../scss/app.scss';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  if (!root) return;

  ReactDOM.render(
    <Provider store={store}>
      <App></App>
    </Provider>,
    root
  );
});
