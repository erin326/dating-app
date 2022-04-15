import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ActionCable  from 'actioncable';


import { ActionCableProvider } from 'react-actioncable-provider';



// const CableApp = {};
// CableApp.cable = actionCable.createConsumer(APP_CABLE_URL);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ActionCableProvider url='api/cable'>
        <App/>
      </ActionCableProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// export const APP_URL = ''

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

