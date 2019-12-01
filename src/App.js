import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import LogInPage from "./Pages/LogInPage/LogInPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

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
    dispatch
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
        state = dispatch({ type: "GET_LIKES_STATUS" });
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
              posts={state.posts}
              newPost={state.newPost}
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
              newPost={state.newPost}
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
              newUser={state.newUser}
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
              loginUser={state.loginUser}
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
