import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  takeUsersWhoLikedThePost,
  clearUsersDataWhoLikedThePost,
} from '../../../../../../../../redux/actions/whoLikedPostActions';
import SmallUserInfoBar from '../../../../../../../../shares/components/SmallUserInfoBar/SmallUserInfoBar';
import { ReactComponent as Preloader } from '../../../../../../../../assets/images/blackPreloader.svg';
import styles from './WhoLikedPostPlate.module.scss';

const WhoLikedPostPlate = props => {
  const {
    postId,
    isFetching,
    data,
    error,
    takeUsersWhoLikedThePost,
    clearUsersDataWhoLikedThePost,
  } = props;

  useEffect(() => {
    takeUsersWhoLikedThePost(postId);
    return () => clearUsersDataWhoLikedThePost();
  }, [postId]);

  return (
    <>
      {isFetching ? (
        <div style={{ minWidth: 150, maxHeight: 34 }}>
          <Preloader className={styles.preloader} style={{}} />
        </div>
      ) : (
        <div className={styles.mainContainer}>
          {data.map(({ _id: id, profilePhoto, userName }) => (
            <SmallUserInfoBar key={id} userName={userName} profilePhoto={profilePhoto} />
          ))}
        </div>
      )}
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </>
  );
};

const mapStateToProps = state => ({
  isFetching: state.whoLikedPost.isFetching,
  data: state.whoLikedPost.data,
  error: state.whoLikedPost.error,
});

export default connect(mapStateToProps, {
  takeUsersWhoLikedThePost,
  clearUsersDataWhoLikedThePost,
})(WhoLikedPostPlate);
