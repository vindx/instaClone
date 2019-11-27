import React from "react";

import PostHeader from "./PostHeader/PostHeader";
import PostFooter from "./PostFooter/PostFooter";
import PostPhoto from "./PostPhoto/PostPhoto";
import styles from './Post.module.css';

const Post = (props) => {
    const {postInfo} = props;

    return (
        <article className={styles.mainContainer}>
            <PostHeader profilePhotoUrl={postInfo.owner.profilePhoto}
                        userName={postInfo.owner.userName}/>
            <PostPhoto photoUrl={postInfo.postPhoto}/>
            <PostFooter liked={postInfo.wasLiked}
                        likesNumber={postInfo.likes}
                        userName={postInfo.userName}
                        description={postInfo.description}/>
        </article>
    )
};

export default Post;