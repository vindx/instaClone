import React from 'react';
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path='/posts' component={Header}/>
                <Route exact path='/posts' component={Posts}/>

                <Route exact path='/profile' component={Header}/>
                <Route exact path='/profile' component={Profile}/>

                <Route exact path='/' component={SignUp}/>
                <Route exact path='/login' component={LogIn}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
