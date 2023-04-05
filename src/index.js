import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import Converter from './converter';
// import Counter from './counter';
//import RandomQuotes from './quoteGenerator';
// import ContactManager from './ContactManager';
import TodoApp from './Todo';
//const contacts=["John"];

    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoApp/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
