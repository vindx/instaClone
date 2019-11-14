import React from "react";
import styles from './ProfilePost.module.css';

const ProfilePost = (props) => {
    return (
        <div className={styles.profilePost}>
            <img src={props.photo}/>
        </div>
    )
};

export default ProfilePost;