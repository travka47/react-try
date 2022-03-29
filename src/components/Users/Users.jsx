import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
  if(props.userData.length === 0) {
    props.setUsers([
        {
          id: 1,
          followed: true,
          fullName: "Sam4ik",
          status: "I am fat",
          location: {city: "Vladivostok", country: "Russia"}
        },
        {
          id: 2,
          followed: true,
          fullName: "Zhenya",
          status: "I am not fat",
          location: {city: "Vladivostok", country: "Russia"}
        },
        {
          id: 3,
          followed: false,
          fullName: "Egor4ik",
          status: "I am fat",
          location: {city: "Vladivostok", country: "Russia"}
        },
        {
          id: 4,
          followed: false,
          fullName: "Dmitro",
          status: "I am fat",
          location: {city: "Vladivostok", country: "Russia"}
        },
      ],
    )
  }

  return (
    <div>
      {
        props.userData.map(user => <div key={user.id}>
            <img className={classes.userPhoto}
                 src="https://i1.wp.com/s1.r29static.com/bin/entry/0e2/x,80/1894701/image.jpg"
                 alt="avatar"
            />
            <p>{user.fullName}</p>
            <p>{user.status}</p>
            {user.followed
              ? <button onClick={() => {
                props.unfollow(user.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                props.follow(user.id)
              }}>Follow</button>
            }
          </div>
        )
      }
    </div>
  )
};

export default Users;