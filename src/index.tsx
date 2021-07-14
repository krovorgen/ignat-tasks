import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './p1-main/m1-ui/u1-app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
