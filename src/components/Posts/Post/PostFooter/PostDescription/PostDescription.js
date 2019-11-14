import React from "react";
import styles from './PostDescription.module.css';

const PostDescription = (props) => {
    return (
        <div className={styles.postDescription}>
            <a className={styles.postOwner}>{props.userName}</a>
            <span>{props.description}</span>
        </div>
    )
};

export default PostDescription;