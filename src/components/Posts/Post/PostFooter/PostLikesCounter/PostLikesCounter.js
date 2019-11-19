import React from "react";
import styles from './PostLikesCounter.module.css';

const PostLikesCounter = (props) => {
    const {likesNumber} = props;

    return (
        <div>
            <span className={styles.postLikesCounter}>{likesNumber}</span>
            likes
        </div>
    )
};

export default PostLikesCounter;