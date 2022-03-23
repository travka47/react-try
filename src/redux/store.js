import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
