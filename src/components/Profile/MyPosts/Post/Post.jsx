import React from "react"
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img className={classes.avatar} src="https://i1.wp.com/s1.r29static.com/bin/entry/0e2/x,80/1894701/image.jpg" alt='avatar'></img>
            <div className={classes.info}>
                <p><span>Timothee Chalamet</span>, SomeOne Famous</p>
                <p className={classes.text}>{props.text}</p>
            </div>
        </div>
    )
}

export default Post