import React from "react"
import classes from './MyPosts.module.css'
import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div className={classes.container}>
            <h3>My posts</h3>
            <div className={classes.adding}>
                <textarea placeholder="type here..." rows="5" cols="70"></textarea>
                <button>Add post</button>
            </div> 
            <div>
                <Post message="First post"/>
                <Post message="Second post"/>
                <Post message="Third post"/>
            </div>
        </div>
    )
}

export default MyPosts