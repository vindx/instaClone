import React from "react";
import styles from './Post.module.css';
import PostHeader from "./PostHeader/PostHeader";
import PostFooter from "./PostFooter/PostFoter";
import PostPhoto from "./PostPhoto/PostPhoto";

const Post = () => {
    return (
        <article className={styles.mainContainer}>
            <PostHeader/>
            <PostPhoto/>
            <PostFooter/>
        </article>
    )
};

export default Post;