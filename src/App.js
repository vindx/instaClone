import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import LogInPage from "./Pages/LogInPage/LogInPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

function App(props) {
  const {
    createAccount,
    createNewPost,
    updateNewUserInfo,
    updateLoginInfo,
    logInCheck,
    removeRequest,
    logOut,
    deleteUser,
    updateNewPost,
    deletePost,
    getLikeStatus,
    putLikeOnPost
  } = props;
  let { state } = props;
  let [postsUrl, profileUrl, adminUrl, signUpUrl, logInUrl] = [
    "/posts",
    "/profile",
    "/admin",
    "/signup",
    "/login"
  ];

  const getActiveUser = users => {
    if (localStorage.length) {
      const user = users.find(
        user => user.userName === JSON.parse(localStorage.activeUser)
      );
      if (user) {
        user.activeNow = true;
        state = getLikeStatus();
        return user;
      }
    }
  };

  const activeUser = getActiveUser(state.users);

  (activeUser => {
    if (activeUser) {
      if (activeUser.userName === "admin") {
        adminUrl = "/";
      } else {
        postsUrl = "/";
      }
    } else {
      signUpUrl = "/";
      logInUrl = "/login";
      postsUrl += "/hidden";
      profileUrl += "/hidden";
      adminUrl += "/hidden";
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
              users={state.users}
              logOut={logOut}
              deleteUser={deleteUser}
            />
          )}
        />

        <Route
          exact
          path={postsUrl}
          render={() => (
            <PostsPage
              postsUrl={postsUrl}
              posts={state.posts}
              newPost={state.newPost}
              updateNewPost={updateNewPost}
              createNewPost={createNewPost}
              putLikeOnPost={putLikeOnPost}
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
              removeRequest={removeRequest}
              logOut={logOut}
              newPost={state.newPost}
              updateNewPost={updateNewPost}
              createNewPost={createNewPost}
              deletePost={deletePost}
            />
          )}
        />

        <Route
          exact
          path={signUpUrl}
          render={() => (
            <SignUpPage
              logInUrl={logInUrl}
              newUser={state.newUser}
              updateNewUserInfo={updateNewUserInfo}
              createAccount={createAccount}
            />
          )}
        />

        <Route
          exact
          path={logInUrl}
          render={() => (
            <LogInPage
              signUpUrl={signUpUrl}
              logInCheck={logInCheck}
              loginUser={state.loginUser}
              updateLoginInfo={updateLoginInfo}
            />
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
