import React from 'react';
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path='/' component={Header}/>
                <Route exact path='/' component={Posts}/>
                <Route path='/login' component={LogIn}/>
                <Route path='/signup' component={SignUp}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
