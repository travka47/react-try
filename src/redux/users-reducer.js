const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  userData: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        userData: state.userData.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        userData: state.userData.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      };
    }
    case SET_USERS: {
      return {
        ...state,
        userData: action.userData
      }
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (userData) => ({type: SET_USERS, userData: userData});

export default usersReducer;
