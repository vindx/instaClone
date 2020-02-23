import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  CreatePostFormTextArea,
  CreatePostFormInput,
  UploadPhotoInput,
} from '../../FormsControls/FormsControls';
import Button from '../../Button/Button';
import {
  postTagNameValidator,
  minLengthCreator,
  required,
} from '../../../../utils/validators/validators';
import { ReactComponent as Preloader } from '../../../../assets/images/blackPreloader.svg';
import styles from './ModalWindow.module.scss';
import PostTags from '../../PostTags/PostTags';
import instaIcons from '../../../../assets/images/instaIcons.png';

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
      <span className={styles.addTag} onClick={props.createTag}>
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
    <div className={styles.fileInputContainer}>
      <UploadPhotoInput
        inputName="Choose post photo (optional, max 3Mb)"
        error={null}
        uploadFunc={props.uploadPostPhoto}
        style={{ margin: '0 25px 0 0' }}
      />
      <span
        className={`${styles.photoStatus} ${props.postPhoto && styles.photoHaveBeenChosen}`}
        style={{ backgroundImage: `url(${instaIcons})` }}
      />
    </div>

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
      {(props.tagIsFinding || props.isFetching) && <Preloader className={styles.tagsPreloader} />}
      <Button btn_name="Create" />
    </div>
  </form>
);

const ModalWindowFormRedux = reduxForm({ form: 'createPostForm' })(ModalWindowForm);

const ModalWindow = props => {
  const { onClose, isOpen, isFetching } = props;
  const [searchingTag, setSearchingTag] = useState('');
  const [postPhoto, setPostPhoto] = useState(null);

  const uploadPostPhoto = e => {
    if (e.target.files.length) {
      setPostPhoto(e.target.files[0]);
    }
  };

  const close = e => {
    e.preventDefault();

    if (onClose) {
      onClose();
      props.deleteExistedTags();
      props.deleteSelectedTags();
      setSearchingTag('');
      setPostPhoto(null);
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

  const createPost = ({ description }) => {
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
          uploadPostPhoto={uploadPostPhoto}
          postPhoto={postPhoto}
        />
      </div>
      <div className={styles.background} onClick={close} />
    </>
  );
};

export default ModalWindow;
