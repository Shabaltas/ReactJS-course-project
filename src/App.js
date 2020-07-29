import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
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
import Dialog from "@material-ui/core/Dialog";
import {clearErrorAction} from "./redux/reducer/errorReducer";
import Error from "./components/Error/Error";

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

    catchAllUnhandledRejection = (event) => {
        console.log(event.promise);
        alert(event.reason);
    };

    componentDidMount() {
        window.addEventListener("unhandledrejection", this.catchAllUnhandledRejection)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledRejection);
    }

    closeDialog = () => {
        this.props.clearError();
    };

    render() {
        return this.props.error
            ? <Dialog aria-labelledby="simple-dialog-title" open={true} onClose={this.closeDialog}>
                <Error reason={this.props.error}/>
            </Dialog>
            : this.props.initialized
                ? <BrowserRouter>
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <NavbarContainer/>
                        <div className='app-wrapper__content'>
                            <Switch>
                                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                                <Route path='/dialogs' render={() => withSuspense(DialogsContainer)()}/>
                                <Route path='/news' component={withSuspense(News)}/>
                                <Route path='/music' component={withSuspense(Music)}/>
                                <Route path='/settings' component={withSuspense(Settings)}/>
                                <Route path='/users' component={withSuspense(UsersContainer)}/>
                                <Route path='/login' component={LoginContainer}/>
                                <Route path='/' exact render={() => <Redirect to='/profile'/>}/>
                                <Route path='*' component={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
                : <Preloader/>
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        error: state.err.error
    }
};

const AppContent = connect(mapStateToProps, {initializeApp, clearError: clearErrorAction})(App);

export default () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <AppContent/>
            </Provider>
        </React.StrictMode>
    )
}
