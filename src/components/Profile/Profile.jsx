import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import UserInfo from "./UserInfo/UserInfo"

const Profile = (props) => { 
    return (
        <div>
            <UserInfo/>
            <MyPosts postData={props.pageData.postData} />
      </div>
    )
}

export default Profile