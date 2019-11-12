import React from "react";
import styles from './PostActions.module.css';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const PostActions = () => {
    return (
        <section className={styles.postActions}>
            <button className={`${styles.postActionButton}`}>
                <FavoriteBorderOutlinedIcon/>
            </button>
        </section>
    )
};

export default PostActions;