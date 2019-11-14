import React from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={styles.mainContainer}>
            <Post
                profilePhotoUrl='https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                userName='loqasy'
                photoUrl=''
                liked={true}
                likesNumber='6'
                postDescription={`I'm gonna tell you a story today,which was I was dreaming before.
                ”Once I could fly the sky. I don't know the why, but I flew the same as high as people are standing.Passenger can definitely see me though, no one realise me!
                I was getting so sad, I talked to them, of course nobody replied me.Even though I found my family and friends and talked to them, they ignored me.I was so sad and felt lonely.
                Suddenly I saw my body was clear a bit,and finally found out I've already dead.After realising that,I began to cry a lot.”Then I woke up and I was really crying reality.
                `}
            />
            <Post
                profilePhotoUrl='https://images.pexels.com/photos/3194582/pexels-photo-3194582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                userName='kopola'
                photoUrl='https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                liked={true}
                likesNumber='18'
                postDescription={`this is my first time to archery. i'm not a good archer at all \u{1F606}`}
            />
            <Post
                profilePhotoUrl='https://images.pexels.com/photos/2663802/pexels-photo-2663802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                userName='powaki'
                photoUrl='https://images.pexels.com/photos/532168/pexels-photo-532168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                liked={false}
                likesNumber='8'
                postDescription={`WOW! \u{1F63B} just look at these flowers \u{1F33C} `}
            />
        </div>
    )
};

export default Posts;