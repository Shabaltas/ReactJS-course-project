import React from 'react';
import {BrowserRouter, Route, DefaultRoute} from 'react-router-dom';
import './App.css';
import './CustomApp.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar data={props.store.getState().navbar}/>
                <div className='app-wrapper__content'>
                    <Route path='/profile' render={() => <Profile data={props.store.getState().profilePage}
                                                                  dispatch={props.store.dispatch.bind(props.store)}/>}
                    />
                    <Route path='/dialogs' render={() => <Dialogs data={props.store.getState().dialogsPage}
                                                                  dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path="/" exact render={() => <Profile data={props.store.getState().profilePage}
                                                                 dispatch={props.store.dispatch.bind(props.store)}/>}
                    />
                </div>
        </div>
        </BrowserRouter>

    )
};

export default App;
