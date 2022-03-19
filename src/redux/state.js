let state = {
  profilePage: {
    postData: [
      { id: 1, text: "first post" },
      { id: 2, text: "second post" },
      { id: 3, text: "third post" },
    ],
  },
  messagesPage: {
    dialogData: [
      { id: 1, name: "Zhenya Travka" },
      { id: 2, name: "Egorik Blintsov" },
      { id: 3, name: "Sam4ik Tolstyak" },
      { id: 4, name: "Timothee Chalamet"},
    ],
    messageData: [
      { id: 1, text: "first" },
      { id: 2, text: "second" },
      { id: 3, text: "third" },
      { id: 4, text: "fourth" },
    ],
  },
  sidebar: {
    linkData: [
      { name: "Profile" },
      { name: "Messages" },
      { name: "News" },
      { name: "Music" },
      { name: "Settings" },
      { name: "Friends" }
    ],
    friendData: [
      { id: 1, name: "Zhenya Travka" },
      { id: 2, name: "Egorik Blintsov" },
      { id: 3, name: "Sam4ik Tolstyak" },
      // { id: 4, name: "Timothee Chalamet"},
    ]
  }
};

export default state;