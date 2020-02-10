import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';

import { CreatePostFormTextArea, CreatePostFormInput } from '../../FormsControls/FormsControls';
import Button from '../../Button/Button';
import {
  postTagNameValidator,
  minLengthCreator,
  required,
} from '../../../../utils/validators/validators';
import { ReactComponent as Preloader } from '../../../../assets/images/blackPreloader.svg';
import styles from './ModalWindow.module.scss';
import PostTags from '../../PostTags/PostTags';

const TagsForm = props => (
  <>
    <Field
      component={CreatePostFormInput}
      label="Tags"
      name="tagName"
      type="search"
      placeholder="Add tag (optional, min 3 symbols)"
      validate={[props.minLength, postTagNameValidator]}
      onChange={props.findTag}
    />
    {props.showCreateButton && props.searchingTag && props.valid && (
      <span
        className={`${styles.addTag} ${props.fullCoincidenceOfTag && styles.inactive}`}
        onClick={props.createTag}
      >
        Create tag
      </span>
    )}
    <div className={styles.tags}>
      {props.existedTags.map(tag => (
        <span key={tag._id} className={styles.tag} onClick={() => props.moveTagToSelected(tag)}>
          <span className={styles.tagSymbol}>#</span>
          {tag.tagName}
        </span>
      ))}
    </div>
    {props.selectedTags.length > 0 && (
      <div className={styles.selectedTags}>
        <span className={styles.title}>Selected tags</span>
        <PostTags tags={props.selectedTags} onClick={props.removeTagFromSelected} />
      </div>
    )}
  </>
);

const TagsFormRedux = reduxForm({ form: 'tagsForm' })(TagsForm);

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
    <TagsFormRedux
      searchingTag={props.searchingTag}
      minLength={props.minLength}
      findTag={props.findTag}
      tagIsFinding={props.tagIsFinding}
      existedTags={props.existedTags}
      moveTagToSelected={props.moveTagToSelected}
      selectedTags={props.selectedTags}
      removeTagFromSelected={props.removeTagFromSelected}
      showCreateButton={props.showCreateButton}
      createTag={props.createTag}
    />

    {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
    <div className={styles.footer}>
      {props.tagIsFinding && <Preloader className={styles.tagsPreloader} />}
      <Button btn_name="Create" disabled={props.invalid || props.isFetching} />
    </div>
  </form>
);

const ModalWindowFormRedux = reduxForm({ form: 'createPostForm' })(ModalWindowForm);

const ModalWindow = props => {
  const { onClose, isOpen, isFetching } = props;
  const [searchingTag, setSearchingTag] = useState('');

  const close = e => {
    e.preventDefault();

    if (onClose) {
      onClose();
      props.deleteExistedTags();
      props.deleteSelectedTags();
      setSearchingTag('');
    }
  };

  if (!isOpen) {
    return null;
  }

  if (props.success) {
    window.scrollTo(0, 0);
    return null;
  }

  let timerId;
  const findTag = e => {
    props.showButton(false);
    clearTimeout(timerId);
    if (e.target.value.length > 2) {
      props.tagsFindingToggle(true);
      timerId = setTimeout(async () => {
        props.findTags(e.target.value);
        setSearchingTag(e.target.value);
      }, 500);
    } else {
      props.deleteExistedTags();
    }
  };

  const createTag = () => {
    props.createTag(searchingTag);
  };

  const moveTagToSelected = tag => {
    props.selectTag(tag);
  };

  const removeTagFromSelected = tag => {
    props.removeSelectedTag(tag);
  };

  const createPost = ({ description, postPhoto }) => {
    const tags = props.selectedTags;
    props.createPost({ description, postPhoto, tags });
    setSearchingTag('');
  };

  const minLength = minLengthCreator(3);

  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.header}>Create a post</div>
        <ModalWindowFormRedux
          isFetching={isFetching}
          onSubmit={createPost}
          minLength={minLength}
          searchingTag={searchingTag}
          findTag={findTag}
          tagIsFinding={props.tagIsFinding}
          existedTags={props.existedTags}
          moveTagToSelected={moveTagToSelected}
          selectedTags={props.selectedTags}
          removeTagFromSelected={removeTagFromSelected}
          showCreateButton={props.showCreateButton}
          createTag={createTag}
        />
      </div>
      <div className={styles.background} onClick={close} />
    </>
  );
};

export default ModalWindow;
