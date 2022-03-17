import React from "react"
import { NavLink } from "react-router-dom"
import classes from './../Communication.module.css'

const Dialog = (props) => {
    return (
        <NavLink to={`/messages/${props.id}`} 
        className={navData => navData.isActive ? classes.active : classes.inactive}>
            {props.name}
        </NavLink>
    )
}

export default Dialog