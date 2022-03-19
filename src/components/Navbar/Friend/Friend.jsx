import React from "react";
import classes from "./Friend.module.css";
import { NavLink } from "react-router-dom";

const Friend = (props) => {
  return (
    <div className={classes.friend}>
      <img
        src="https://i1.wp.com/s1.r29static.com/bin/entry/0e2/x,80/1894701/image.jpg"
        alt="avatar"
      ></img>
      <NavLink to={`/Friends/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

export default Friend;
