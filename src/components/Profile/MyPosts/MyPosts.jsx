import React from "react"
import classes from './MyPosts.module.css'
import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div className={classes.container}>
            <h3>My posts</h3>
            <div className={classes.adding}>
                <textarea placeholder="type here..." rows="6" cols="70"></textarea>
                <button>Add post</button>
            </div> 
            <div>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts