import React from "react";
import styles from './PostLikesCounter.module.css';

const PostLikesCounter = (props) => {
    return (
        <div>
            <span className={styles.postLikesCounter}>{props.likesNumber}</span>
            likes
        </div>
    )
};

export default PostLikesCounter;