import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';


// const CableApp = {};
// CableApp.cable = actionCable.createConsumer(APP_CABLE_URL);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App
      //  cableApp={CableApp}
        />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// export const APP_URL = ''

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

