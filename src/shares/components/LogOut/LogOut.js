import React from 'react';
import PropTypes from 'proptypes';
import Button from '../Button/Button';

const LogOut = props => <Button btn_name="Log Out" onClick={props.logOut} />;

LogOut.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default LogOut;
