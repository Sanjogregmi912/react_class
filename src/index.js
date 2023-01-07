import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Feedback_app from './components/Feedback_app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <App  name = {"anyone"} age= {"12"}/>
    
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
