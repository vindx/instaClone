import React from 'react';
import PropTypes from 'proptypes';
import styles from './PostTags.module.scss';

const PostTags = props => {
  const { tags, onClick } = props;

  if (!tags.length) return null;

  return (
    <div className={styles.tagsContainer}>
      {tags.map(tag => (
        <span key={tag._id} className={styles.tag} onClick={() => onClick(tag)}>
          <span className={styles.tagSymbol}>#</span>
          {tag.tagName}
        </span>
      ))}
    </div>
  );
};

PostTags.propTypes = {
  tags: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PostTags;
