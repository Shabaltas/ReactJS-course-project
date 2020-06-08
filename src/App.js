import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import './CustomApp.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MyContext from "./MyContext";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <MyContext.Consumer>
                    {(store) => <Navbar data={store.getState().navbar}/>}
                </MyContext.Consumer>
                <div className='app-wrapper__content'>
                    <Route path='/profile' render={() => <Profile/>}
                    />
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path="/" exact render={() => <Profile/>}
                    />
                </div>
            </div>
        </BrowserRouter>

    )
};

export default App;
