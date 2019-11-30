import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import "./index.css";

const rerenderEntireTree = state => {
  ReactDOM.render(
    <App
      state={state}
      deleteUser={store.deleteUser.bind(store)}
      createAccount={store.createAccount.bind(store)}
      removeRequest={store.removeRequest.bind(store)}
      logOut={store.logOut.bind(store)}
      logInCheck={store.logInCheck.bind(store)}
      createNewPost={store.createNewPost.bind(store)}
      updateNewUserInfo={store.updateNewUserInfo.bind(store)}
      updateLoginInfo={store.updateLogInInfo.bind(store)}
    />,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
