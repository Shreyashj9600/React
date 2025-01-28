import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import './index.css'

let myDate = new Date().toDateString();
let currTime = new Date().toLocaleTimeString();

const stylingEle = {
  color: 'pink',
  border: '1px solid red',
  backgroundColor: 'green'
}

ReactDom.render(
  <>
    <App />
    <h1 style={stylingEle}>Hello, My name is Shreyash</h1>

    <p>Todays Date is : {myDate}</p>
    <p>Current time is : {currTime}</p>
  </>,
  document.getElementById("root")
);
getComputedStyle; 
