const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogData: [
    { id: 1, name: "Zhenya Travka" },
    { id: 2, name: "Egorik Blintsov" },
    { id: 3, name: "Sam4ik Tolstyak" },
    { id: 4, name: "Timothee Chalamet" },
  ],
  messageData: [
    { id: 1, text: "first" },
    { id: 2, text: "second" },
    { id: 3, text: "third" },
    { id: 4, text: "fourth" },
  ],
  newMessageText: "send me",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 66,
        text: state.newMessageText,
      };
      let stateCopy = { ...state };
      stateCopy.messageData = [...state.messageData];
      if (newMessage.text !== "") {
        stateCopy.messageData.push(newMessage);
        stateCopy.newMessageText = "";
      }
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.newMessageText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text,
});

export default messagesReducer;
