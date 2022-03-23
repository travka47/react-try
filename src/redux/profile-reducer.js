const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        text: state.newPostText,
      };
      if (newPost.text !== "") {
        state.postData.push(newPost);
        state.newPostText = "";
      }
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
      break;
  }
  return state;
};


export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: text,
});

export default profileReducer;