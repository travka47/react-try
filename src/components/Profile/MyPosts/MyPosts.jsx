import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";

const MyPosts = (props) => {
  let postItems = props.postData.map((item) => (
    <Post id={item.id} text={item.text} />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  };
  let onNewPostTextChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={classes.container}>
      <h3>My posts</h3>
      <div className={classes.adding}>
        <textarea
          onChange={onNewPostTextChange}
          value={props.newPostText}
          ref={newPostElement}
          placeholder="type here..."
          rows="5"
          cols="70"
        />
        <button onClick={addPost}>Add post</button>
      </div>
      <div>{postItems}</div>
    </div>
  );
};

export default MyPosts;
