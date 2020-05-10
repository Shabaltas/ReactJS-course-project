import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, addPost, changePostMsg} from "./redux/state";

export let renderApp = (state) => {
    window.state = state;
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addMessage={addMessage}
                 addPost={addPost}
                 changePostInput={changePostMsg}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};