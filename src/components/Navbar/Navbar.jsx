import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/profile" className={ navData => navData.isActive ? classes.active + " " + classes.link : classes.inactive+ " " + classes.link}>Profile</NavLink>
      <NavLink to="/messages" className={ navData => navData.isActive ? classes.active + " " + classes.link : classes.inactive+ " " + classes.link}>Messages</NavLink>
      <NavLink to="/news" className={ navData => navData.isActive ? classes.active + " " + classes.link : classes.inactive+ " " + classes.link}>News</NavLink>
      <NavLink to="/music" className={ navData => navData.isActive ? classes.active + " " + classes.link : classes.inactive+ " " + classes.link}>Music</NavLink>
      <NavLink to="/settings" className={ navData => navData.isActive ? classes.active + " " + classes.link : classes.inactive+ " " + classes.link}>Settings</NavLink>
      <NavLink to="/friends" className={ navData => navData.isActive ? classes.active + " " + classes.link : classes.inactive + " " + classes.link}>Friends</NavLink>
      <div className={classes.friend_container}>
        <div className={classes.friend}>
            <img src="https://i1.wp.com/s1.r29static.com/bin/entry/0e2/x,80/1894701/image.jpg" alt='avatar'></img>
            <NavLink to="/friends/1">Egorik Blintsov</NavLink>
        </div>
        <div className={classes.friend}>
            <img src="https://i1.wp.com/s1.r29static.com/bin/entry/0e2/x,80/1894701/image.jpg" alt='avatar'></img>
            <NavLink to="/friends/2">Sam4ik Tolstyak</NavLink>
        </div>
        <div className={classes.friend}>
            <img src="https://i1.wp.com/s1.r29static.com/bin/entry/0e2/x,80/1894701/image.jpg" alt='avatar'></img>
            <NavLink to="/friends/3">Timothee Chalamet</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
