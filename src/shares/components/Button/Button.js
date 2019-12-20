import React from 'react';
import PropTypes from 'proptypes';
import styles from './Button.module.scss';

const Button = props => (
  <button className={styles.button} {...props}>
    {props.btn_name}
  </button>
);

Button.propTypes = {
  btn_name: PropTypes.string.isRequired,
};

export default Button;
