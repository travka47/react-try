import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postItems = props.postData.map((item) => (
    <Post id={item.id} text={item.text} />
  ));
  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  };
  let onNewPostTextChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div>{postItems}</div>
    </div>
  );
};

export default MyPosts;
