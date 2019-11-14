import React from "react";
import styles from './PostHeader.module.css';

const PostHeader = (props) => {
    return (
        <header className={styles.postHeader}>
            <a className={styles.postHeaderAccountLogo}>
                <img src={props.profilePhotoUrl}/>
            </a>
            <div className={styles.postHeaderAccountName}>
                <a className={styles.postOwner}>{props.userName}</a>
            </div>
        </header>
    )
};

export default PostHeader;