import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { ReactComponent as Preloader } from '../assets/images/blackPreloader.svg';
import PostsPage from '../Pages/PostsPage/PostsPage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';
import SignUpPageContainer from '../Pages/SignUpPage/SignUpPageContainer';
import LogInPageContainer from '../Pages/LogInPage/LogInPageContainer';
import AdminPageContainer from '../Pages/AdminPage/AdminPageContainer';
import SignUpOrLogInPage from '../Pages/SignUpOrLogInPage/SignUpOrLogInPage';
import PageNotFound from '../shares/components/PageNotFound/PageNotFound';
import { initialize } from '../redux/reducers/appReducer';
import Main from '../Pages/Main';

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
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
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, { initialize }))(App);
