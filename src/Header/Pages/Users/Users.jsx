import React from "react";
import style from "./Users.module.scss";
import * as axios from 'axios';

let Users = (props) => {
 if(props.users.length === 0){

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
        props.setUsers(response.data.items);
    })
    
 }

  return (
    <div className={style.users_block}>
      {props.users.map((u) => (
        <div key={u.id} className={style.users_div}>
          <span>
            <div>
              {/* <img className={style.image} src={u.photoUrl} /> */}
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span className={style.info_div}>
            <span>
              <div>{u.id}</div>
              <div>{u.name}</div>
            </span>
            <span>
              <div>{u.status}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
