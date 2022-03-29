let initialState = {
  linkData: [
    { name: "Profile" },
    { name: "Messages" },
    { name: "News" },
    { name: "Music" },
    { name: "Settings" },
    { name: "Users" },
    { name: "Friends" }
  ],
  friendData: [
    { id: 1, name: "Zhenya Travka" },
    { id: 2, name: "Egorik Blintsov" },
    { id: 3, name: "Sam4ik Tolstyak" },
    // { id: 4, name: "Timothee Chalamet"},
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
