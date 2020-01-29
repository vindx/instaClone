import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

import BigPreloader from '../shares/components/Preloaders/BigPreloader/BigPreloader';
import PostsPage from '../Pages/PostsPage/PostsPage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';
import AdminPageContainer from '../Pages/AdminPage/AdminPageContainer';
import SignUpOrLogInPage from '../Pages/SignUpOrLogInPage/SignUpOrLogInPage';
import PageNotFound from '../shares/components/PageNotFound/PageNotFound';
import { initialize } from '../redux/reducers/appReducer';

const App = props => {
  const { initialize, initialized } = props;

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (!initialized) return <BigPreloader />;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PostsPage} />
        <Route path="/accounts/:action" component={SignUpOrLogInPage} />
        <Route exact path="/admin" component={AdminPageContainer} />
        <Route path="/profile/:userName?" component={ProfilePage} />
        <PageNotFound />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  initialized: state.app.initialized,
});

App.propTypes = {
  initialize: PropTypes.func.isRequired,
  initialized: PropTypes.bool.isRequired,
};

export default compose(withRouter, connect(mapStateToProps, { initialize }))(App);
