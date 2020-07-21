import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import './CustomApp.css';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import LoginContainer from "./components/Login/LoginContainer";
import Preloader from "./components/Preloader/Preloader";
import store from "./redux/reduxStore";
import {initializeApp} from "./redux/reducer/appReducer";
import withSuspense from "./hoc/wishSuspense";

const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.initializeApp();
    }

    render() {
        return this.props.initialized
            ? <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className='app-wrapper__content'>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => withSuspense(DialogsContainer)()}/>
                        <Route path='/news' component={withSuspense(News)}/>
                        <Route path='/music' component={withSuspense(Music)}/>
                        <Route path='/settings' component={withSuspense(Settings)}/>
                        <Route path='/users' component={withSuspense(UsersContainer)}/>
                        <Route path='/login' component={LoginContainer}/>
                        <Route path="/" exact render={() => <ProfileContainer/>}
                        />
                    </div>
                </div>
            </BrowserRouter>
            : <Preloader/>
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContent = connect(mapStateToProps, { initializeApp })(App);

export default () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <AppContent/>
            </Provider>
        </React.StrictMode>
    )
}
