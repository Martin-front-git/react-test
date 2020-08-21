import React from "react";
import style from "./Users.module.scss";

let Users = (props) => {
 if(props.users.length === 0){
    props.setUsers([
        {
          id: 1,
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEpUUJVqlxCFXUdaSn7ieT0ucZkZGX1NlmBQ&usqp=CAU",
          followed: true,
          name: "Martin Hovhannisyan",
          text: "Hello World",
          location: { country: "Armenia", city: "Gyumri" },
        },
        {
          id: 2,
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEpUUJVqlxCFXUdaSn7ieT0ucZkZGX1NlmBQ&usqp=CAU",
          followed: false,
          name: "Karen Abrahamyan",
          text: "Hello Boys",
          location: { country: "Russia", city: "Moscow" },
        },
        {
          id: 3,
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEpUUJVqlxCFXUdaSn7ieT0ucZkZGX1NlmBQ&usqp=CAU",
          followed: true,
          name: "John Wick",
          text: "Hello Girls",
          location: { country: "Ukraine", city: "Kiev" },
        },
      ]);
 }

  return (
    <div className={style.users_block}>
      {props.users.map((u) => (
        <div key={u.id} className={style.users_div}>
          <span>
            <div>
              <img className={style.image} src={u.photoUrl} />
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
              <div>{u.name}</div>
              <div>{u.text}</div>
            </span>
            <span>
              n<div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
