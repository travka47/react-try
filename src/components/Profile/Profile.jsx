import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserInfo from "./UserInfo/UserInfo";

const Profile = () => {
  return (
    <div>
      <UserInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
