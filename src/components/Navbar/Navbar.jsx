import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import Friend from "./Friend/Friend";

const Navbar = (props) => {
  let friendItems = props.sidebarData.friendData.map(item => <Friend id={item.id} name={item.name}/>);

  return (
    <nav className={classes.nav}>
      <NavLink
        to="/profile"
        className={(navData) =>
          navData.isActive
            ? classes.active + " " + classes.link
            : classes.inactive + " " + classes.link
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/messages"
        className={(navData) =>
          navData.isActive
            ? classes.active + " " + classes.link
            : classes.inactive + " " + classes.link
        }
      >
        Messages
      </NavLink>
      <NavLink
        to="/news"
        className={(navData) =>
          navData.isActive
            ? classes.active + " " + classes.link
            : classes.inactive + " " + classes.link
        }
      >
        News
      </NavLink>
      <NavLink
        to="/music"
        className={(navData) =>
          navData.isActive
            ? classes.active + " " + classes.link
            : classes.inactive + " " + classes.link
        }
      >
        Music
      </NavLink>
      <NavLink
        to="/settings"
        className={(navData) =>
          navData.isActive
            ? classes.active + " " + classes.link
            : classes.inactive + " " + classes.link
        }
      >
        Settings
      </NavLink>
      <NavLink
        to="/friends"
        className={(navData) =>
          navData.isActive
            ? classes.active + " " + classes.link
            : classes.inactive + " " + classes.link
        }
      >
        Friends
      </NavLink>
      <div className={classes.friend_container}>
        { friendItems }
      </div>
    </nav>
  );
};

export default Navbar;
