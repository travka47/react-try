const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    { id: 1, text: "first post" },
    { id: 2, text: "second post" },
    { id: 3, text: "third post" },
  ],
  newPostText: "god, help me",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        text: state.newPostText,
      };
      let stateCopy = { ...state };
      stateCopy.postData = [...state.postData];
      if (newPost.text !== "") {
        stateCopy.postData.push(newPost);
        stateCopy.newPostText = "";
      }
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newPostText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: text,
});

export default profileReducer;
