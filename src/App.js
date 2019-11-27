import React from "react";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Profile from "./components/Profile/Profile";
import AdminPage from "./components/AdminPage/AdminPage";
import CreatePost from "./components/CreatePost/CreatePost";

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
          render={() => <Header postsUrl={postsUrl} />}
        />
        <Route
          exact
          path={postsUrl}
          render={() => <Posts posts={state.posts} />}
        />
        <Route
          exact
          path={postsUrl}
          render={() => <CreatePost createNewPost={createNewPost} />}
        />

        <Route
          exact
          path={profileUrl}
          render={() => <Header postsUrl={postsUrl} />}
        />
        <Route
          exact
          path={profileUrl}
          render={() => (
            <Profile
              user={getUser(state.users)}
              removeRequest={removeRequest}
              logOut={logOut}
            />
          )}
        />
        <Route
          exact
          path={profileUrl}
          render={() => <CreatePost createNewPost={createNewPost} />}
        />

        <Route
          exact
          path={signUpUrl}
          render={() => (
            <SignUp
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
            <LogIn
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
