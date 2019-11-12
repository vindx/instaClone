import React from "react";
import styles from './PostLikesCounter.module.css';

const PostLikesCounter = () => {
    return (
        <div>
            <span className={styles.postLikesCounter}>15</span>
            likes
        </div>
    )
};

export default PostLikesCounter;