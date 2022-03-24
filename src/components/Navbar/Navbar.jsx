import React from "react";
import classes from "./Navbar.module.css";
import Friend from "./Friend/Friend";
import Link from "./Link/Link";

const Navbar = (props) => {
  let friendItems = props.friendData.map((item) => (
    <Friend id={item.id} name={item.name} />
  ));
  let linkItems = props.linkData.map((item) => (
    <Link name={item.name} />
  ));

  return (
    <nav className={classes.nav}>
      {linkItems}
      <div className={classes.friend_container}>
        {friendItems}
      </div>
    </nav>
  );
};

export default Navbar;
