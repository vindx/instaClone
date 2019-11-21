import React from 'react';
import ReactDOM from 'react-dom';
import {createAccount, createNewPost} from "./state/state";
import App from './App';
import './index.css';

const rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} createAccount={createAccount}
                         createNewPost={createNewPost}/>, document.getElementById('root'));
};

export default rerenderEntireTree;