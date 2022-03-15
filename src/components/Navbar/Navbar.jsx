import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/profile" className={ navData => navData.isActive ? classes.active : classes.inactive}>Profile</NavLink>
      <NavLink to="/messages" className={ navData => navData.isActive ? classes.active : classes.inactive}>Messages</NavLink>
      <NavLink to="/news" className={ navData => navData.isActive ? classes.active : classes.inactive}>News</NavLink>
      <NavLink to="/music" className={ navData => navData.isActive ? classes.active : classes.inactive}>Music</NavLink>
      <NavLink to="/settings" className={ navData => navData.isActive ? classes.active : classes.inactive}>Settings</NavLink>
    </nav>
  );
};

export default Navbar;
