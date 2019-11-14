import React from "react";
import styles from './Post.module.css';
import PostHeader from "./PostHeader/PostHeader";
import PostFooter from "./PostFooter/PostFoter";
import PostPhoto from "./PostPhoto/PostPhoto";

const Post = (props) => {
    return (
        <article className={styles.mainContainer}>
            <PostHeader profilePhotoUrl={props.profilePhotoUrl}
                        userName={props.userName}/>
            <PostPhoto photoUrl={props.photoUrl}/>
            <PostFooter liked={props.liked}
                        likesNumber={props.likesNumber}
                        userName={props.userName}
                        description={props.postDescription}/>
        </article>
    )
};

export default Post;