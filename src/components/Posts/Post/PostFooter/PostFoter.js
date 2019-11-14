import React from "react";
import styles from './PostFooter.module.css';
import PostActions from "./PostActions/PostActions";
import PostLikesCounter from "./PostLikesCounter/PostLikesCounter";
import PostDescription from "./PostDescription/PostDescription";

const PostFooter = (props) => {
    return (
        <div className={styles.postFooter}>
            <PostActions liked={props.liked}/>
            <PostLikesCounter likesNumber={props.likesNumber}/>
            <PostDescription userName={props.userName} description={props.description}/>
        </div>
    )
};

export default PostFooter;