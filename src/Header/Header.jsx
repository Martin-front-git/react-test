import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';


const Header =()=>{
    return(
        <div className={style.head_div}>
            <div>
                <NavLink to='Page1' className={style.nav}>Page1</NavLink>
            </div>
            <div>
                <NavLink to='Page2' className={style.nav}>Page2</NavLink>
            </div>
        </div>
    )
}


export default Header;