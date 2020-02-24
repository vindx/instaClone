import React from 'react';
import PropTypes from 'proptypes';

import styles from './ModalWindowTemplate.module.scss';

const ModalWindowTemplate = props => {
  const { onClose, isOpen, success } = props;

  const close = e => {
    e.preventDefault();

    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  if (success) {
    window.scrollTo(0, 0);
    return null;
  }

  return (
    <>
      <div className={styles.modalContainer}>{props.children}</div>
      <div className={styles.background} onClick={close} />
    </>
  );
};

ModalWindowTemplate.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  success: PropTypes.bool,
};

export default ModalWindowTemplate;
