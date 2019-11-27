import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import LogInPage from "./Pages/LogInPage/LogInPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

function App(props) {
  const {
    state,
    createAccount,
    createNewPost,
    updateNewUserInfo,
    updateLoginInfo,
    logInCheck,
    removeRequest,
    logOut
  } = props;
  let [postsUrl, profileUrl, adminUrl, signUpUrl, logInUrl] = [
    "/posts",
    "/profile",
    "/admin",
    "/signup",
    "/login"
  ];

  const getUser = users => {
    if (localStorage.length) {
      postsUrl = "/";
      const [user] = users.filter(
        user => user.userName === JSON.parse(localStorage.activeUser)
      );
      return user;
    } else {
      signUpUrl = "/";
      return {
        email: "",
        userName: "",
        fullName: "",
        profilePhoto: "",
        password: "",
        removeRequest: false,
        posts: []
      };
    }
  };
  getUser(state.users);

  return (
    <BrowserRouter>
      <div className="App">
        <Route
          exact
          path={adminUrl}
          render={() => <AdminPage users={state.users} />}
        />

        <Route
          exact
          path={postsUrl}
          render={() => (
            <PostsPage
              postsUrl={postsUrl}
              posts={state.posts}
              createNewPost={createNewPost}
            />
          )}
        />

        <Route
          exact
          path={profileUrl}
          render={() => (
            <ProfilePage
              postsUrl={postsUrl}
              user={getUser(state.users)}
              removeRequest={removeRequest}
              logOut={logOut}
              createNewPost={createNewPost}
            />
          )}
        />

        <Route
          exact
          path={signUpUrl}
          render={() => (
            <SignUpPage
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
