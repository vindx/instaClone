import React from "react";
import styles from './PostDescription.module.css';

const PostDescription = () => {
    return (
        <div className={styles.postDescription}>
            <a className={styles.postOwner}>k_karelin</a>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, aspernatur.</span>
        </div>
    )
};

export default PostDescription;