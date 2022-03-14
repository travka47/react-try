import React from "react";
import logo from './../../jordan.svg'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo}></img>
        </header>
    )
}

export default Header