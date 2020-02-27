import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import { deAuthThunk } from '../../../redux/actions/authActions';
import LogOut from './LogOut';

const LogOutContainer = ({ deAuthThunk }) => <LogOut logOut={deAuthThunk} />;

LogOutContainer.propTypes = {
  deAuthThunk: PropTypes.func.isRequired,
};

export default connect(null, { deAuthThunk })(LogOutContainer);
