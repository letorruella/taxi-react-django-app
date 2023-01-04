import 'bootswatch/dist/lumen/bootstrap.css';

import React from 'react';
import {createRoot} from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'; 
axios.defaults.xsrfCookieName = 'csrftoken'; 
axios.defaults.xsrfHeaderName = 'X-CSRFToken'; 

createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <HashRouter>
     <App/>
    </HashRouter>
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
