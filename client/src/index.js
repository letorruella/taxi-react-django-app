import React from 'react';
import {createRoot} from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './components/Landing';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        {/* new begin */}
        <Route index element={<Landing />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='log-in' element={<LogIn />} />
        {/* new end */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
