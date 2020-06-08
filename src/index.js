import React from 'react';
import './index.css';
import store from "./redux/reduxState";
import ReactDOM from "react-dom";
import App from "./App";
import MyContext from "./MyContext";

export const renderApp = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <MyContext.Provider value={store}>
                <App/>
            </MyContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
store.subscribe(renderApp.bind(undefined, store));
renderApp(store);
