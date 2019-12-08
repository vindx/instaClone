import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import store from './redux/redux-store';
import './index.scss';

const rerenderEntireTree = state => {
  ReactDOM.render(
    <App
      state={state.state}
      // deleteUser={store.deleteUser.bind(store)}
      // createAccount={store.createAccount.bind(store)}
      // removeRequest={store.removeRequest.bind(store)}
      // logOut={store.logOut.bind(store)}
      // logInCheck={store.logInCheck.bind(store)}
      // createNewPost={store.createNewPost.bind(store)}
      // deletePost={store.deletePost.bind(store)}
      // updateNewUserInfo={store.updateNewUserInfo.bind(store)}
      // updateLoginInfo={store.updateLogInInfo.bind(store)}
      // updateNewPost={store.updateNewPost.bind(store)}
      // getLikeStatus={store.getLikeStatus.bind(store)}
      // putLikeOnPost={store.putLikeOnPost.bind(store)}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
});
