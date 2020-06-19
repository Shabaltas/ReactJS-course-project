import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import './CustomApp.css';
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper__content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}
                    />
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' component={UsersContainer}/>
                    <Route path="/" exact render={() => <ProfileContainer/>}
                    />
                </div>
            </div>
        </BrowserRouter>

    )
};

export default App;
