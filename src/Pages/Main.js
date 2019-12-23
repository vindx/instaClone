import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LogOutContainer from '../shares/components/LogOut/LogOutContainer';
import withAuthRedirect from '../hoc/withAuthRedirect';
import Button from '../shares/components/Button/Button';

const Main = props => {
  if (props.activeUser === 'admin') return <Redirect to="/admin" />;
  return (
    <>
      <h1>POSTS</h1>
      <LogOutContainer />
      <Link to="/admin">
        <Button btn_name="Admin" />
      </Link>
    </>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  activeUser: state.auth.activeUser,
});

export default connect(mapStateToProps)(withAuthRedirect(Main));
