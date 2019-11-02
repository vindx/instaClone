import React from 'react';
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path='/login' component={LogIn}/>
                <Route path='/signup' component={SignUp}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
