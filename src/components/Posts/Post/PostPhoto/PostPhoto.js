import React from "react";
import styles from "./PostPhoto.module.css";

const PostPhoto = (props) => {
    const {photoUrl} = props;

    return (
        <div className={styles.postPhoto}>
            <img alt='' src={photoUrl}/>
        </div>
    )
};

export default PostPhoto;