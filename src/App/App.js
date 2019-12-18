import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'proptypes';

import { getLikesStatusActionCreator } from '../redux/actions';
import PostsPage from '../Pages/PostsPage/PostsPage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';
import SignUpPageContainer from '../Pages/SignUpPage/SignUpPageContainer';
import LogInPageContainer from '../Pages/LogInPage/LogInPageContainer';
import AdminPageContainer from '../Pages/AdminPage/AdminPageContainer';
import SignUpOrLogInPage from '../Pages/SignUpOrLogInPage/SignUpOrLogInPage';

function App(props) {
  const { state, dispatch } = props;
  let [postsUrl, profileUrl, adminUrl, signUpUrl, logInUrl] = [
    '/posts',
    '/profile',
    '/admin',
    '/signup',
    '/login',
  ];

  // eslint-disable-next-line consistent-return
  const getActiveUser = users => {
    if (localStorage.length) {
      // eslint-disable-next-line no-shadow
      const user = users.find(
        // eslint-disable-next-line no-shadow
        user =>
          user.userName === JSON.parse(localStorage.activeUser) ||
          user.email === JSON.parse(localStorage.activeUser)
      );
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

  // eslint-disable-next-line no-shadow
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
        <Route path="/" component={SignUpOrLogInPage} />
        <Route exact path={adminUrl} render={() => <AdminPageContainer />} />
        <Route exact path={postsUrl} render={() => <PostsPage postsUrl={postsUrl} />} />
        <Route exact path={profileUrl} render={() => <ProfilePage postsUrl={postsUrl} />} />
        <Route exact path={signUpUrl} render={() => <SignUpPageContainer logInUrl={logInUrl} />} />
        <Route exact path={logInUrl} render={() => <LogInPageContainer signUpUrl={signUpUrl} />} />
      </div>
    </BrowserRouter>
  );
}

App.propTypes = {
  state: PropTypes.shape({
    firstLog: PropTypes.bool,
    users: PropTypes.shape({
      existedUsers: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default App;
