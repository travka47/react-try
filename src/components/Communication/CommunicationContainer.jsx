import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/messages-reducer";
import Communication from "./Communication";

const CommunicationContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let sendMessage = () => {
    let action = sendMessageActionCreator();
    props.store.dispatch(action);
  };

  let updateNewMessageText = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Communication
      sendMessage={sendMessage}
      updateNewMessageText={updateNewMessageText}
      dialogData={state.dialogData}
      messageData={state.messageData}
      newMessageText={state.newMessageText}
    />
  );
};

export default CommunicationContainer;
