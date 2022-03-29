import React from "react";
import classes from "./UserCard.module.css";

const UserCard = (props) => {
  return (
    <div className={classes.card}>
      <img
        src="https://i1.wp.com/s1.r29static.com/bin/entry/0e2/x,80/1894701/image.jpg"
        alt="avatar"
      />
    </div>
  )
};

export default UserCard;