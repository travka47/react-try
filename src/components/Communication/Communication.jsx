import React from "react";
import classes from "./Communication.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/state";

const Communication = (props) => {
  let dialogItems = props.pageData.dialogData.map((item) => (
    <Dialog id={item.id} name={item.name} />
  ));
  let messageItems = props.pageData.messageData.map((item) => (
    <Message id={item.id} text={item.text} />
  ));
  let newMessageElement = React.createRef();
  let sendMessage = () => {
    let action = sendMessageActionCreator();
    props.dispatch(action);
  };
  let onNewMessageTextChange = () => {
    let text = newMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={classes.container}>
      <div>{dialogItems}</div>
      <div className={classes.message_container}>
        {messageItems}
        <div className={classes.adding}>
          <textarea
            onChange={onNewMessageTextChange}
            value={props.pageData.newMessageText}
            ref={newMessageElement}
            rows="2"
            cols="57"
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Communication;
