import React from "react";
import classes from "./Users.module.css";
import axios from "axios";
import UserCard from "./UserCard/UserCard";

class Users extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return (
      <div className={classes.container}>
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <div className={classes.usersContainer}>
          {this.props.userData.map(user => <div key={user.id}>
              <UserCard user={user}/>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Users;