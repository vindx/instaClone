import React from "react";

import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import styles from './Profile.module.css';

const Profile = (props) => {
    const {user} = props;

    return (
        <div className={styles.profileContainer}>
            <ProfileHeader
                profilePhotoUrl={user.profilePhoto}
                userName={user.userName}
                fullName={user.fullName}
                removeRequestStatus={user.removeRequest}
            />
            <ProfilePosts
                posts={user.posts}/>
        </div>
    )
};

export default Profile;