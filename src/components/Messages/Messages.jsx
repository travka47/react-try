import classNames from "classnames"
import React from "react"
import { NavLink } from "react-router-dom"
import classes from './Messages.module.css'

const Dialog = (props) => {
    return (
        <NavLink to={`/messages/${props.id}`} 
        className={navData => navData.isActive ? classes.active : classes.inactive}>
            {props.name}
        </NavLink>
    )
}

const Message = (props) => {
    return (
        <div className="text">{props.text}</div>
    )
} 

const Messages = () => {
    return (
        <div className={classes.container}>
            <div className={classes.dialogs_container}>
                <Dialog name="Zhenya" id="1"/>
                <Dialog name="Egorik" id="2"/>
                <Dialog name="Sam4ik" id="3"/>
            </div>
            <div className={classes.messages_container}>
                <Message text="1"/>
                <Message text="2"/>
                <Message text="3"/>
                <Message text="4"/>
            </div>
        </div>
    )
}

export default Messages