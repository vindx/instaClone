import React from "react";
import styles from './ProfileHeader.module.css';
import {Link} from "react-router-dom";

const ProfileHeader = () => {
    return (
        <header className={styles.container}>
            <div className={styles.photoContainer}>
                <button className={styles.photo}>
                    <img src='https://sun9-8.userapi.com/c840337/v840337778/54c24/F0FALJRCAaE.jpg'/>
                </button>
            </div>
            <section>
                <div className={styles.userName}>
                    <span>k_karelin</span>
                </div>
                <section className={styles.buttons}>
                    <button className={styles.button}>Delete Profile</button>
                    <Link to='/'>
                        <button className={styles.button}>Log Out</button>
                    </Link>
                </section>
                <div className={styles.profileDescription}>
                    <span>Kiryl Karelin</span>
                </div>
            </section>
        </header>
    )
};

export default ProfileHeader;