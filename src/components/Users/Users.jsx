import React from "react";
import classes from "./Users.module.css";
import axios from "axios";
import UserCard from "./UserCard/UserCard";
import Pagination from 'react-responsive-pagination';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onSetCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  };

  // pagination = (currentPage, totalUsersCount) => {
    //1/2-> 123...91011
    //10/11->123...91011

    //3-> 1...234...91011
    //4-> 12...345...91011
    //8->123...789...1011
    //9->123...8910...11

    //5-> 123...456...91011
    //6->123...567...91011


    //totalUsersCount > 10
      //currentPage < 3 or currentPage >= totalUsersCount-1 -> [123...totalUsersCount-2 totalUsersCount-1 totalUsersCount]

      //currentPage == 3 or currentPage == 4
      //currentPage == totalUsersCount-3 or currentPage == totalUsersCount-2

      //currentPage -> [123...currentPage-1 currentPage currentPage+1...totalUsersCount-2 totalUsersCount-1 totalUsersCount]
  //   return [];
  // }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (<div className={classes.container}>

      {/*<div className={classes.pagination}>*/}
      {/*  {pages.map(page => <span*/}
      {/*    className={this.props.currentPage === page && classes.selectedPage}*/}
      {/*    onClick={(e) => {this.onSetCurrentPage(page)}}>*/}
      {/*      {page}*/}
      {/*    </span>)}*/}
      {/*  <span>…</span>*/}
      {/*</div>*/}
      <Pagination extraClassName={classes.pagination}
        current={this.props.currentPage}
        total={pagesCount}
        onPageChange={this.onSetCurrentPage}
      />

      <div className={classes.usersContainer}>
        {this.props.userData.map(user => <div key={user.id}>
          <UserCard
            user={user}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        </div>)}
      </div>
    </div>)
  }
}

export default Users;