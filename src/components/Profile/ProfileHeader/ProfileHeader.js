import React from "react";
import {Link} from "react-router-dom";

import styles from './ProfileHeader.module.css';

const ProfileHeader = (props) => {
    const {profilePhotoUrl, userName, fullName, removeRequestStatus: removeProfile} = props;

    return (
        <header className={styles.container}>
            <div className={styles.photoContainer}>
                <button className={styles.photo}>
                    <img alt='' src={profilePhotoUrl}/>
                </button>
            </div>
            <section>
                <div className={styles.userName}>
                    <span>{userName}</span>
                </div>
                <section className={styles.buttons}>
                    <button className={styles.button}>{removeProfile ? 'Undo Delete' : 'Delete Profile'}</button>
                    <Link to='/'>
                        <button className={styles.button}>Log Out</button>
                    </Link>
                </section>
                <div className={styles.profileDescription}>
                    <span>{fullName}</span>
                </div>
            </section>
        </header>
    )
};

export default ProfileHeader;