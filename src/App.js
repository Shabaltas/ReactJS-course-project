import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import './CustomApp.css';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {thunkCreator} from "./redux/actionCreator";
import LoginContainer from "./components/Login/LoginContainer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.setAuthMe();
    }

    render() {
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className='app-wrapper__content'>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/users' component={UsersContainer}/>
                        <Route path='/login' component={LoginContainer}/>
                        <Route path="/" exact render={() => <ProfileContainer/>}
                        />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {setAuthMe: thunkCreator.setAuthUser})(App);
