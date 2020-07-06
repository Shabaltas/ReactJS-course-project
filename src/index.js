import React from 'react';
import './index.css';
import store from "./redux/reduxState";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

window.store = store;
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
