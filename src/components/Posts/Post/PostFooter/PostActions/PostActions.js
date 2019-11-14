import React from "react";
import styles from './PostActions.module.css';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const PostActions = (props) => {
    return (
        <section className={styles.postActions}>
            <button className={`${styles.postActionButton} ${props.liked ? styles.postWasLiked : null}`}>
                <FavoriteBorderOutlinedIcon/>
            </button>
        </section>
    )
};

export default PostActions;