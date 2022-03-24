import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/messages-reducer";
import Communication from "./Communication";

let mapStateToProps = (state) => {
  return {
    dialogData: state.messagesPage.dialogData,
    messageData: state.messagesPage.messageData,
    newMessageText: state.messagesPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      let action = sendMessageActionCreator();
      dispatch(action);
    },
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    },
  };
};

const CommunicationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Communication);

export default CommunicationContainer;
