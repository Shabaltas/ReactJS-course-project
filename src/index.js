import React from 'react';
import './index.css';
import store from "./redux/reduxState";
import ReactDOM from "react-dom";
import App from "./App";

window.store = store;
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
