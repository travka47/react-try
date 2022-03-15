import React from "react"
import classes from "./UserInfo.module.css"

const UserInfo = () => {
  return (
    <div className={classes.user}>
      <div className={classes.polaroid}>
        <div className={classes.userPhoto}>
          <img
            src="https://i1.wp.com/s1.r29static.com/bin/entry/0e2/x,80/1894701/image.jpg"
            alt="avatar"
          ></img>
        </div>
        <div className={classes.details}>
          <h2>
            SomeOne Famous<span>Timothee Chalamet</span>
          </h2>
        </div>
      </div>
      <div className={classes.userInfo}>
        <ul>
          <li>
            Date of birth: <span>04.07.2002</span>
          </li>
          <li>
            City: <span>Vladivostok</span>
          </li>
          <li>
            Education: <span>FEFU</span>
          </li>
          <li>
            Web site:{" "}
            <a href="https://github.com/travka47">
              https://github.com/travka47
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo
