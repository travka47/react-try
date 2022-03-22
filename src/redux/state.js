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
      newMessageText: "rep",
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
  addPost() {
    let newPost = {
      id: 4,
      text: this._state.profilePage.newPostText,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newPostText) {
    this._state.profilePage.newPostText = newPostText;
    this._callSubscriber(this._state);
  },
  sendMessage() {
    let newMessage = {
      id: 66,
      text: this._state.messagesPage.newMessageText,
    };
    this._state.messagesPage.messageData.push(newMessage);
    this._state.messagesPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newMessageText) {
    this._state.messagesPage.newMessageText = newMessageText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;