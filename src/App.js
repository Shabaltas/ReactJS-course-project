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

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <BrowserRouter>
                <div className='app-wrapper__content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path="/" exact component={Profile} />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;
