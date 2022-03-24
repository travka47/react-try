import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage;

  let addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };

  let updateNewPostText = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      postData={state.postData}
      newPostText={state.newPostText}
    />
  );
};

export default MyPostsContainer;
