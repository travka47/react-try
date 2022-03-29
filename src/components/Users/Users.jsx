import React from "react";
import classes from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      this.props.setUsers(response.data.items)
    })
  }
  render() {
    return (
      <div>
        {
          this.props.userData.map(user => <div key={user.id}>
              <img className={classes.userPhoto}
                   src={user.photos.small != null ? user.photos.small : "https://i1.wp.com/s1.r29static.com/bin/entry/0e2/x,80/1894701/image.jpg"}
                   alt="avatar"
              />
              <p>{user.name}</p>
              <p>{user.status}</p>
              {user.followed
                ? <button onClick={() => {
                  this.props.unfollow(user.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  this.props.follow(user.id)
                }}>Follow</button>
              }
            </div>
          )
        }
      </div>
    )
  }
}

export default Users;