import React from "react";
import PropTypes from 'proptypes';

import ProfilePost from "./ProfilePost/ProfilePost";
import styles from './ProfilePosts.module.css';

const ProfilePosts = (props) => {
    const { photoUrls } = props;

    return (
        <div className={styles.profilePosts}>
            {photoUrls.map(photoUrl => <ProfilePost photo={photoUrl}/>)}
        </div>
    )
};

ProfilePosts.propTypes = {
    photoUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ProfilePosts;