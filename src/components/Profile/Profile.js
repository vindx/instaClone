import React from "react";
import styles from './Profile.module.css';
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfilePosts from "./ProfilePosts/ProfilePosts";

const Profile = () => {
    return (
        <div className={styles.profileContainer}>
            <ProfileHeader/>
            <ProfilePosts/>
        </div>
    )
};

export default Profile;