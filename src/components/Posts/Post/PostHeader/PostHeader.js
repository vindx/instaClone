import React from "react";
import styles from './PostHeader.module.css';

const PostHeader = () => {
    return (
        <header className={styles.postHeader}>
            <a className={styles.postHeaderAccountLogo}>
                <img src='https://sun9-8.userapi.com/c840337/v840337778/54c24/F0FALJRCAaE.jpg'/>
            </a>
            <div className={styles.postHeaderAccountName}>
                <a className={styles.postOwner}>k_karelin</a>
            </div>
        </header>
    )
};

export default PostHeader;