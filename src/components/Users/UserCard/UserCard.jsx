import React from "react";
import classes from "./UserCard.module.css";

const UserCard = (props) => {
  return (
    <div className={classes.userCard}>
      <img className={classes.userPhoto}
           src={props.user.photos.small != null ? props.user.photos.small : "https://i1.wp.com/s1.r29static.com/bin/entry/0e2/x,80/1894701/image.jpg"}
           alt="avatar"
      />
      <p className={classes.userName}>{props.user.name}</p>
      <p
        className={classes.userStatus}>{props.user.status}</p>
      {props.user.followed
        ? <button className={classes.unfollowed} onClick={() => {
          props.unfollow(props.user.id)
        }}>Unfollow</button>
        : <button onClick={() => {
          props.follow(props.user.id)
        }}>Follow</button>
      }
    </div>
  )
};

export default UserCard;