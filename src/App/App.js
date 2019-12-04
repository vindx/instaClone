import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignUpPage from '../Pages/SignUpPage/SignUpPage';
import LogInPage from '../Pages/LogInPage/LogInPage';
import AdminPage from '../Pages/AdminPage/AdminPage';
import PostsPage from '../Pages/PostsPage/PostsPage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';
import { getLikesStatusActionCreator } from '../redux/actions';

function App(props) {
  const {
    // createAccount,
    // createNewPost,
    // updateNewUserInfo,
    // updateLoginInfo,
    // logInCheck,
    // removeRequest,
    // logOut,
    // deleteUser,
    // updateNewPost,
    // deletePost,
    // getLikeStatus,
    // putLikeOnPost,
    dispatch,
  } = props;
  let { state } = props;
  let [postsUrl, profileUrl, adminUrl, signUpUrl, logInUrl] = [
    '/posts',
    '/profile',
    '/admin',
    '/signup',
    '/login',
  ];

  const getActiveUser = users => {
    if (localStorage.length) {
      const user = users.find(user => {
        return user.userName === JSON.parse(localStorage.activeUser);
      });
      if (user) {
        user.activeNow = true;
        if (state.firstLog) {
          state.firstLog = !state.firstLog;
          dispatch(getLikesStatusActionCreator());
        }
        return user;
      }
    }
  };

  const activeUser = getActiveUser(state.users.existedUsers);

  (activeUser => {
    if (activeUser) {
      if (activeUser.userName === 'admin') {
        adminUrl = '/';
      } else {
        postsUrl = '/';
      }
    } else {
      signUpUrl = '/';
      logInUrl = '/login';
      postsUrl += '/hidden';
      profileUrl += '/hidden';
      adminUrl += '/hidden';
    }
  })(activeUser);

  return (
    <BrowserRouter>
      <div className="App">
        <Route
          exact
          path={adminUrl}
          render={() => (
            <AdminPage
              users={state.users.existedUsers}
              // logOut={logOut}
              // deleteUser={deleteUser}
              dispatch={dispatch}
            />
          )}
        />

        <Route
          exact
          path={postsUrl}
          render={() => (
            <PostsPage
              postsUrl={postsUrl}
              posts={state.posts.existedPosts}
              newPost={state.posts.newPost}
              // updateNewPost={updateNewPost}
              // createNewPost={createNewPost}
              // putLikeOnPost={putLikeOnPost}
              dispatch={dispatch}
            />
          )}
        />

        <Route
          exact
          path={profileUrl}
          render={() => (
            <ProfilePage
              postsUrl={postsUrl}
              user={activeUser}
              newPost={state.posts.newPost}
              // removeRequest={removeRequest}
              // logOut={logOut}
              // updateNewPost={updateNewPost}
              // createNewPost={createNewPost}
              // deletePost={deletePost}
              dispatch={dispatch}
            />
          )}
        />

        <Route
          exact
          path={signUpUrl}
          render={() => (
            <SignUpPage
              logInUrl={logInUrl}
              newUserCheck={state.users.newUserCheck}
              newUser={state.users.newUser}
              // updateNewUserInfo={updateNewUserInfo}
              // createAccount={createAccount}
              dispatch={dispatch}
            />
          )}
        />

        <Route
          exact
          path={logInUrl}
          render={() => (
            <LogInPage
              signUpUrl={signUpUrl}
              loginCheck={state.users.loginCheck}
              loginUser={state.users.loginUser}
              // logInCheck={logInCheck}
              // updateLoginInfo={updateLoginInfo}
              dispatch={dispatch}
            />
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
