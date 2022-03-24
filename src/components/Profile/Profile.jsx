import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserInfo from "./UserInfo/UserInfo";

const Profile = (props) => {
  return (
    <div>
      <UserInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
