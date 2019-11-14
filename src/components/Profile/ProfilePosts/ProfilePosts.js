import React from "react";
import styles from './ProfilePosts.module.css';
import ProfilePost from "./ProfilePost/ProfilePost";

const ProfilePosts = (props) => {
    let photoUrls = props.photoUrls.slice();
    return (
        <div className={styles.profilePosts}>
            {photoUrls.map(photoUrl => <ProfilePost photo={photoUrl}/>)}
        </div>
    )
};

export default ProfilePosts;