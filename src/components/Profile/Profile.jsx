import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";

const Profile = (props) => {
  return (
    <div>
      <UserInfo />
      <MyPosts
        postData={props.pageData.postData}
        newPostText={props.pageData.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
