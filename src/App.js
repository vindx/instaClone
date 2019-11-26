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
    const [user] = users.filter(user => user.userName === 'kopola');
    return user
};

const getUsersEmailAndUserName = (users) => {
    let existUsers = {
        existEmails: [],
        existUserNames: [],
    };

    users.forEach(({email, userName}) => {
        existUsers.existEmails.push(email);
        existUsers.existUserNames.push(userName);
    });

    return existUsers;
};

function App(props) {
    const {state, createAccount, createNewPost, updateNewUserInfo, updateLoginInfo, logInCheck} = props;

    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path='/admin' render={() => <AdminPage users={state.users}/>}/>

                <Route exact path='/posts' component={Header}/>
                <Route exact path='/posts' render={() => <Posts posts={state.posts}/>}/>
                <Route exact path='/posts' render={() => <CreatePost createNewPost={createNewPost}/>}/>

                <Route exact path='/profile' component={Header}/>
                <Route exact path='/profile' render={() => <Profile user={getUser(state.users)}/>}/>
                <Route exact path='/profile' render={() => <CreatePost createNewPost={createNewPost}/>}/>

                <Route exact path='/'
                       render={() => <SignUp
                           newUser={state.newUser}
                           updateNewUserInfo={updateNewUserInfo}
                           existUsers={getUsersEmailAndUserName(state.users)}
                           createAccount={createAccount}/>}
                />
                <Route exact path='/login'
                       render={() => <LogIn
                           logInCheck={logInCheck}
                           loginUser={state.loginUser}
                           updateLoginInfo={updateLoginInfo} existUsers={state.users}/>}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
