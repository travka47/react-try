import React from "react"
import classes from './Communication.module.css'
import Dialog from "./Dialog/Dialog"
import Message from "./Message/Message"

const Communication = (props) => {
    let dialogItems = props.pageData.dialogData.map(item => <Dialog id={item.id} name={item.name}/>);
    let messageItems = props.pageData.messageData.map(item => <Message id={item.id} text={item.text}/>);

    return (
        <div className={classes.container}>
            <div className={classes.dialogs_container}>
                { dialogItems }
            </div>
            <div className={classes.messages_container}>
                { messageItems }
            </div>
        </div>
    )
}

export default Communication