import React from 'react';

import PropTypes from 'proptypes';
import Post from './Post/Post';
import PostTags from '../../../../shares/components/PostTags/PostTags';
import styles from './Posts.module.scss';

const Posts = props => {
  const {
    posts,
    putLikeOnPost,
    likeIsFetching,
    lastPostElementRef,
    searchByTag,
    clearSearchingByTag,
    searchableTag,
  } = props;

  return (
    <div className={styles.mainContainer}>
      {searchByTag && (
        <div className={styles.tagsBlock}>
          <span className={styles.title}>Found posts by tag</span>
          <PostTags tags={[searchableTag]} onClick={clearSearchingByTag} />
        </div>
      )}
      {posts.map((post, index) => {
        if (posts.length === index + 1) {
          return (
            <Post
              lastPostElementRef={lastPostElementRef}
              key={post._id}
              postInfo={post}
              putLikeOnPost={putLikeOnPost}
              likeIsFetching={likeIsFetching}
              getPostsByTag={props.getPostsByTag}
            />
          );
        }
        return (
          <Post
            key={post._id}
            postInfo={post}
            putLikeOnPost={putLikeOnPost}
            likeIsFetching={likeIsFetching}
            getPostsByTag={props.getPostsByTag}
          />
        );
      })}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  putLikeOnPost: PropTypes.func.isRequired,
  likeIsFetching: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Posts;
