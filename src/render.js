import React from 'react';
import ReactDOM from 'react-dom';
import {createAccount, createNewPost, logInCheck, updateLogInInfo, updateNewUserInfo} from "./state/state";
import App from './App';
import './index.css';

const rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} createAccount={createAccount}
                         logInCheck={logInCheck}
                         createNewPost={createNewPost}
                         updateNewUserInfo={updateNewUserInfo}
                         updateLoginInfo={updateLogInInfo}/>, document.getElementById('root'));
};

export default rerenderEntireTree;