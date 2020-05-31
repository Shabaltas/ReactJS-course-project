import React from 'react';
import './index.css';
import store from "./redux/reduxState";
import ReactDOM from "react-dom";
import App from "./App";

export const renderApp = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
store.subscribe(renderApp.bind(undefined, store));
renderApp(store);
