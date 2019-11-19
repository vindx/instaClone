import React from "react";

import PostActions from "./PostActions/PostActions";
import PostLikesCounter from "./PostLikesCounter/PostLikesCounter";
import PostDescription from "./PostDescription/PostDescription";
import styles from './PostFooter.module.css';

const PostFooter = (props) => {
    const {liked, likesNumber, userName, description} = props;

    return (
        <div className={styles.postFooter}>
            <PostActions liked={liked}/>
            <PostLikesCounter likesNumber={likesNumber}/>
            <PostDescription userName={userName} description={description}/>
        </div>
    )
};

export default PostFooter;