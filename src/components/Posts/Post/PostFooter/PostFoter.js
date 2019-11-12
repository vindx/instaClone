import React from "react";
import styles from './PostFooter.module.css';
import PostActions from "./PostActions/PostActions";
import PostLikesCounter from "./PostLikesCounter/PostLikesCounter";
import PostDescription from "./PostDescription/PostDescription";

const PostFooter = () => {
    return (
        <div className={styles.postFooter}>
            <PostActions/>
            <PostLikesCounter/>
            <PostDescription/>
        </div>
    )
};

export default PostFooter;