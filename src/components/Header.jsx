import React from "react";
import logo from './../logo.svg'
import './../App.css';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo}></img>
        </header>
    )
}

export default Header;