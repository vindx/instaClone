import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { state, subscribe } from "./state/state";
import {
  createAccount,
  removeRequest,
  logOut,
  createNewPost,
  logInCheck,
  updateLogInInfo,
  updateNewUserInfo,
  deleteUser
} from "./state/state";
import "./index.css";

const rerenderEntireTree = state => {
  ReactDOM.render(
    <App
      state={state}
      deleteUser={deleteUser}
      createAccount={createAccount}
      removeRequest={removeRequest}
      logOut={logOut}
      logInCheck={logInCheck}
      createNewPost={createNewPost}
      updateNewUserInfo={updateNewUserInfo}
      updateLoginInfo={updateLogInInfo}
    />,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
