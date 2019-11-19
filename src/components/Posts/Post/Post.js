import React from "react";

import PostHeader from "./PostHeader/PostHeader";
import PostFooter from "./PostFooter/PostFooter";
import PostPhoto from "./PostPhoto/PostPhoto";
import styles from './Post.module.css';

const Post = (props) => {
    const {profilePhotoUrl, userName, photoUrl, liked, likesNumber, postDescription} = props;

    return (
        <article className={styles.mainContainer}>
            <PostHeader profilePhotoUrl={profilePhotoUrl}
                        userName={userName}/>
            <PostPhoto photoUrl={photoUrl}/>
            <PostFooter liked={liked}
                        likesNumber={likesNumber}
                        userName={userName}
                        description={postDescription}/>
        </article>
    )
};

export default Post;