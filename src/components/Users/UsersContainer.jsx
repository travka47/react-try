import {connect} from "react-redux";
import {
  followAC, unfollowAC, setUsersAC
} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    userData: state.usersPage.userData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      let action = followAC(userId);
      dispatch(action);
    },
    unfollow: (userId) => {
      let action = unfollowAC(userId);
      dispatch(action);
    },
    setUsers: (userData) => {
      let action = setUsersAC(userData);
      dispatch(action);
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;
