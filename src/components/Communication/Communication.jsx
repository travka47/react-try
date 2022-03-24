import React from "react";
import classes from "./Communication.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Communication = (props) => {
  let dialogItems = props.dialogData.map((item) => (
    <Dialog id={item.id} name={item.name} />
  ));
  let messageItems = props.messageData.map((item) => (
    <Message id={item.id} text={item.text} />
  ));
  let newMessageElement = React.createRef();
  let onSendMessage = () => {
    props.sendMessage();
  };
  let onNewMessageTextChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={classes.container}>
      <div>{dialogItems}</div>
      <div className={classes.message_container}>
        {messageItems}
        <div className={classes.adding}>
          <textarea
            onChange={onNewMessageTextChange}
            value={props.newMessageText}
            ref={newMessageElement}
            rows="2"
            cols="57"
          />
          <button onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Communication;
