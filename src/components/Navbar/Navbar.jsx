import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <a href="/profile">Profile</a>
      <a href="/messages">Messages</a>
      <a href="/news">News</a>
      <a href="/music">Music</a>
      <a href="/settings">Settings</a>
    </nav>
  );
};

export default Navbar;
