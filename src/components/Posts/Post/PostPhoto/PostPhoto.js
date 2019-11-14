import React from "react";
import styles from "./PostPhoto.module.css";

const PostPhoto = (props) => {
    return (
        <div className={styles.postPhoto}>
            <img src={props.photoUrl}/>
        </div>
    )
};

export default PostPhoto;