import React from "react";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import styles from './PostActions.module.css';

const PostActions = (props) => {
    const {liked} = props;

    return (
        <section className={styles.postActions}>
            <button className={`${styles.postActionButton} ${liked ? styles.postWasLiked : null}`}>
                <FavoriteBorderOutlinedIcon/>
            </button>
        </section>
    )
};

export default PostActions;