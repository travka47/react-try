const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, text: "first post" },
        { id: 2, text: "second post" },
        { id: 3, text: "third post" },
      ],
      newPostText: "god, help me",
    },
    messagesPage: {
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
    },
    sidebar: {
      linkData: [
        { name: "Profile" },
        { name: "Messages" },
        { name: "News" },
        { name: "Music" },
        { name: "Settings" },
        { name: "Friends" },
      ],
      friendData: [
        { id: 1, name: "Zhenya Travka" },
        { id: 2, name: "Egorik Blintsov" },
        { id: 3, name: "Sam4ik Tolstyak" },
        // { id: 4, name: "Timothee Chalamet"},
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state was changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 4,
          text: this._state.profilePage.newPostText,
        };
        if (newPost.text !== "") {
          this._state.profilePage.postData.push(newPost);
          this._state.profilePage.newPostText = "";
          this._callSubscriber(this._state);
        }
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newPostText;
        this._callSubscriber(this._state);
        break;
      case SEND_MESSAGE:
        let newMessage = {
          id: 66,
          text: this._state.messagesPage.newMessageText,
        };
        if (newMessage.text !== "") {
          this._state.messagesPage.messageData.push(newMessage);
          this._state.messagesPage.newMessageText = "";
          this._callSubscriber(this._state);
        }
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this._state.messagesPage.newMessageText = action.newMessageText;
        this._callSubscriber(this._state);
        break;
      default:
        console.log("Wrong action type");
        break;
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: text,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text,
});

export default store;
