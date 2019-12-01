import React from "react";

import PostHeader from "./PostHeader/PostHeader";
import PostFooter from "./PostFooter/PostFooter";
import PostPhoto from "./PostPhoto/PostPhoto";
import styles from "./Post.module.css";

const Post = props => {
  const { postInfo, putLikeOnPost } = props;
  const { owner, postPhoto, id, wasLiked, likes, description } = postInfo;

  return (
    <article className={styles.mainContainer}>
      <PostHeader
        profilePhotoUrl={owner.profilePhoto}
        userName={owner.userName}
      />
      <PostPhoto photoUrl={postPhoto} />
      <PostFooter
        id={id}
        liked={wasLiked}
        likesNumber={likes}
        userName={owner.userName}
        description={description}
        putLikeOnPost={putLikeOnPost}
      />
    </article>
  );
};

export default Post;
