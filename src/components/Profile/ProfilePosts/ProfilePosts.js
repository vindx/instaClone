import React from "react";
import styles from './ProfilePosts.module.css';
import ProfilePost from "./ProfilePost/ProfilePost";

const ProfilePosts = () => {
    return (
        <div className={styles.profilePosts}>
            <ProfilePost/>
            <ProfilePost/>
            <ProfilePost/>
            <ProfilePost/>
            <ProfilePost/>
            <ProfilePost/>
            <ProfilePost/>
            <ProfilePost/>
        </div>
    )
};

export default ProfilePosts;