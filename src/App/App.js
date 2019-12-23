import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ReactComponent as Preloader } from '../assets/images/blackPreloader.svg';
import PostsPage from '../Pages/PostsPage/PostsPage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';
import SignUpPageContainer from '../Pages/SignUpPage/SignUpPageContainer';
import LogInPageContainer from '../Pages/LogInPage/LogInPageContainer';
import AdminPageContainer from '../Pages/AdminPage/AdminPageContainer';
import SignUpOrLogInPage from '../Pages/SignUpOrLogInPage/SignUpOrLogInPage';
import PageNotFound from '../shares/components/PageNotFound/PageNotFound';
import { firstAppInit } from '../redux/reducers/authReducer';
import Main from '../Pages/Main';

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.firstAppInit();
  }

  render() {
    if (this.props.firstInitIsFetching) return <Preloader />;
    return <App {...this.props} />;
  }
}

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/accounts/:action" component={SignUpOrLogInPage} />
      <Route exact path="/admin" component={AdminPageContainer} />
      {/*<Route exact path="/posts" render={() => <PostsPage postsUrl="/posts" />} />*/}
      {/*<Route exact path="/profile" render={() => <ProfilePage postsUrl="/posts" />} />*/}
      {/*<Route exact path="/signup" render={() => <SignUpPageContainer logInUrl="/login" />} />*/}
      {/*<Route exact path="/login" render={() => <LogInPageContainer signUpUrl="/signup" />} />*/}
      <PageNotFound />
    </Switch>
  </div>
);

const mapStateToProps = state => ({
  firstInitIsFetching: state.auth.firstInitIsFetching,
});

export default connect(mapStateToProps, { firstAppInit })(AppContainer);
