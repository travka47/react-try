import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import UserInfo from "./UserInfo/UserInfo"

const Profile = () => { 
    return (
        <div>
            <UserInfo/>
            <MyPosts/>
      </div>
    )
}

export default Profile