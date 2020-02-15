import React, { useCallback, useEffect, useRef, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

import { ReactComponent as Preloader } from '../../../../assets/images/blackPreloader.svg';
import Posts from './Posts';
import {
  getAllPosts,
  putLikeOnPost,
  getPostsByTag,
  clearData,
} from '../../../../redux/actions/postsActions';
import withAuthRedirect from '../../../../hoc/withAuthRedirect';
import withAdminAuthRedirect from '../../../../hoc/withAdminAuthRedirect';

const PostsContainer = props => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    getAllPosts,
    putLikeOnPost,
    userData,
    initIsFetching,
    posts,
    hasMore,
    likeIsFetching,
  } = props;

  const observer = useRef();
  const lastPostElementRef = useCallback(
    node => {
      if (initIsFetching) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [initIsFetching, hasMore]
  );

  useEffect(() => {
    if (pageNumber === 1) {
      props.clearData();
    }
    getAllPosts(userData.userId, pageNumber);
  }, [getAllPosts, userData.userId, pageNumber]);

  const getPostsByTag = ({ _id: tagId }) => {
    props.clearData();
    props.getPostsByTag(userData.userId, tagId);
  };

  return (
    <>
      <Posts
        posts={posts}
        putLikeOnPost={putLikeOnPost}
        likeIsFetching={likeIsFetching}
        getPostsByTag={getPostsByTag}
        lastPostElementRef={lastPostElementRef}
      />
      {initIsFetching && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
          <Preloader style={{ height: 40 }} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  userData: state.auth.data,
  initIsFetching: state.posts.initIsFetching,
  posts: state.posts.data.posts,
  hasMore: state.posts.data.hasMore,
  likeIsFetching: state.posts.likeIsFetching,
});

PostsContainer.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  putLikeOnPost: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    userId: PropTypes.string,
  }).isRequired,
  initIsFetching: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
  likeIsFetching: PropTypes.array.isRequired,
};

export default compose(
  connect(mapStateToProps, { getAllPosts, putLikeOnPost, getPostsByTag, clearData }),
  withAdminAuthRedirect,
  withAuthRedirect
)(PostsContainer);
