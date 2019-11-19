import React from 'react';
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Profile from "./components/Profile/Profile";
import AdminPage from "./components/AdminPage/AdminPage";
import CreatePost from "./components/CreatePost/CreatePost";

const getUser = (users) => {
    const [user] = users.filter(user => user.userName === 'powaki');
    return user
};

function App(props) {
    const {state} = props;

    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path='/admin' render={() => <AdminPage users={state.users}/>}/>

                <Route exact path='/posts' component={Header}/>
                <Route exact path='/posts' render={() => <Posts posts={state.posts}/>}/>
                <Route exact path='/posts' render={() => <CreatePost/>}/>

                <Route exact path='/profile' component={Header}/>
                <Route exact path='/profile' render={() => <Profile user={getUser(state.users)}/>}/>
                <Route exact path='/profile' render={() => <CreatePost/>}/>

                <Route exact path='/' component={SignUp}/>
                <Route exact path='/login' component={LogIn}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
