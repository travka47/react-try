import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Link.module.css";

const Link = (props) => {
  return (
    <NavLink
      to={`/${props.name}`}
      className={(navData) =>
        navData.isActive
          ? classes.active + " " + classes.link
          : classes.inactive + " " + classes.link
      }
    >
      {props.name}
    </NavLink>
  );
};

export default Link;
