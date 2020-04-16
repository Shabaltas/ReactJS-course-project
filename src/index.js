import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id: 1, msg: "How r u all", likes: 12},
    {id: 2, msg: "LOL", likes: 0},
    {id: 3, msg: "dead", likes: 2},
    {id: 4, msg: "...", likes: 1}
];
let dialogsData = [
    {id: 1, name: "Artyom"},
    {id: 2, name: "Nastya"},
    {id: 3, name: "Igor"}
];

let messagesData = [
    {id: 1, text: "Hi!"},
    {id: 2, text: "Bye."}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
