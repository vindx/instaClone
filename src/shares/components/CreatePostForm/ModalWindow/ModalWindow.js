import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './ModalWindow.module.scss';
import { CreatePostFormTextArea, CreatePostFormInput } from '../../FormsControls/FormsControls';
import Button from '../../Button/Button';
import { required } from '../../../../utils/validators/validators';

const ModalWindowForm = props => (
  <form className={styles.form} onSubmit={props.handleSubmit}>
    <Field
      component={CreatePostFormInput}
      label="Post photo"
      placeholder="Enter URL (optional)"
      name="postPhoto"
      type="text"
    />
    <Field
      component={CreatePostFormTextArea}
      label="Description"
      name="description"
      type="text"
      placeholder={required()}
      validate={[required]}
    />
    {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
    <div className={styles.footer}>
      <Button btn_name="Create" disabled={props.invalid || props.isFetching} />
    </div>
  </form>
);

const ModalWindowFormRedux = reduxForm({ form: 'createPostForm' })(ModalWindowForm);

const ModalWindow = props => {
  const { onClose, isOpen, createPost, isFetching } = props;

  const close = e => {
    e.preventDefault();

    if (onClose) {
      onClose();
    }
  };

  if (!isOpen || props.success) {
    return null;
  }

  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.header}> Create a post</div>
        <ModalWindowFormRedux isFetching={isFetching} onSubmit={createPost} />
      </div>
      <div className={styles.background} onClick={close} />
    </>
  );
};

export default ModalWindow;
