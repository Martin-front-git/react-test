import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';


const Header =()=>{
    return(
        <div className={style.head_div}>
            <div>
                <NavLink to='Names' className={style.nav}>Names</NavLink>
            </div>
            <div>
                <NavLink to='Messages' className={style.nav}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='Users' className={style.nav}>Find Users</NavLink>
            </div>
            <div>
                <NavLink to='Hooks' className={style.nav}>Hooks Page</NavLink>
            </div>
        </div>
    )
}


export default Header;