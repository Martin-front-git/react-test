import React from 'react';
import style from './Users.module.scss';

let Users=(props)=>{
    return(
        <div className={style.users_block}>
         {
             props.usersList.map(un=>
               <div className={style.users_div}>
                    <span >
                        <div>
                            {/* <img className={style.image} src={u.photoUrl}/> */}
                        </div>
                        <div>
                            {un.follow 
                            ? <button onClick={()=>{props.unfollow(un.id)}}>Unfollow</button> 
                            : <button onClick={()=>{props.follow(un.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span className={style.info_div}>
                        <span>
                            <div>{un.name}</div>
                            <div>{un.text}</div>
                        </span>
                        <span>n
                            <div>{un.location.country}</div>
                            <div>{un.location.city}</div>
                        </span>
                    </span>
               </div>)
         }
        </div>
    )
}

export default Users;