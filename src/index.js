import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Repairs } from "./components/Repairs"  //5.  import our component 
import reportWebVitals from './reportWebVitals';

//6.  the <Repairs /> line is us calling the function. In jxs, the call looks kind of like an html tag.
ReactDOM.render(
  <React.StrictMode>
    <Repairs />  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
