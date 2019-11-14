import React from "react";
import styles from './ProfileHeader.module.css';
import {Link} from "react-router-dom";

const ProfileHeader = (props) => {
    return (
        <header className={styles.container}>
            <div className={styles.photoContainer}>
                <button className={styles.photo}>
                    <img src={props.profilePhotoUrl}/>
                </button>
            </div>
            <section>
                <div className={styles.userName}>
                    <span>{props.userName}</span>
                </div>
                <section className={styles.buttons}>
                    <button className={styles.button}>Delete Profile</button>
                    <Link to='/'>
                        <button className={styles.button}>Log Out</button>
                    </Link>
                </section>
                <div className={styles.profileDescription}>
                    <span>{props.fullName}</span>
                </div>
            </section>
        </header>
    )
};

export default ProfileHeader;