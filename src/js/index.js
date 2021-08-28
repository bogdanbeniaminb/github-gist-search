import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  if (!root) return;

  ReactDOM.render(<App></App>, root);
});
