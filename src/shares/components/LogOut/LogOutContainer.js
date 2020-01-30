import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import { deAuth } from '../../../redux/actions/authActions';
import LogOut from './LogOut';

const LogOutContainer = props => {
  const logOut = () => {
    props.deAuth();
    localStorage.removeItem('activeUser');
  };
  return <LogOut logOut={logOut} />;
};

LogOutContainer.propTypes = {
  deAuth: PropTypes.func.isRequired,
};

export default connect(null, { deAuth })(LogOutContainer);
