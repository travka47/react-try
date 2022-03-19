import React from "react"
import { NavLink } from "react-router-dom"
import classes from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={classes.dialog}>
            <img className={classes.avatar} src="https://i1.wp.com/s1.r29static.com/bin/entry/0e2/x,80/1894701/image.jpg" alt='avatar'></img>
            <NavLink to={`/messages/${props.id}`} 
            className={navData => navData.isActive ? classes.active : classes.inactive}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Dialog