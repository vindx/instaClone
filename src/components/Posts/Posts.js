import React from "react";

import Post from "./Post/Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
    const {posts} = props;

    return (
        <div className={styles.mainContainer}>
            {posts.map(({id, owner, likes, wasLiked, postPhoto, description}) =>
                <Post
                    key={id}
                    profilePhotoUrl={owner.profilePhoto}
                    userName={owner.userName}
                    photoUrl={postPhoto}
                    liked={wasLiked}
                    likesNumber={likes}
                    postDescription={description}
                />
            )}
        </div>
    )
};

export default Posts;