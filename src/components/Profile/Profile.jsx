import React from "react"
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts"

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.profile}>
                <div className={classes.card}>
                    <div className={classes.avatar}>
                        <img src="https://i1.wp.com/s1.r29static.com/bin/entry/0e2/x,80/1894701/image.jpg" alt='avatar'></img>
                    </div>
                    <div className={classes.details}>
                        <h2>SomeOne Famous<span>Timothee Chalamet</span></h2>
                    </div>
                </div>
                <div className={classes.infobox}>
                    <ul>
                        <li>Date of birth: 04.07.2002</li>
                        <li>City: Vladivostok</li>
                        <li>Education: FEFU</li>
                        <li>Web site: <a href="https://github.com/travka47">https://github.com/travka47</a></li>
                    </ul>
                </div>
            </div>
            <MyPosts/>
      </div>
    )
}

export default Profile