import {connect} from "react-redux";
import {
  followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC
} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    userData: state.usersPage.userData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPage: (currentPage) => {
      let action = setCurrentPageAC(currentPage);
      dispatch(action);
    },
    setTotalUsersCount: (totalUsersCount) => {
      let action = setTotalUsersCountAC(totalUsersCount);
      dispatch(action);
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;
