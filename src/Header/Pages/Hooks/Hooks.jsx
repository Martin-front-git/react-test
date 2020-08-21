import React from 'react'
import style from './Hooks.module.scss'
import Hook1 from './Hook1/Hook1'
import Hook2 from './Hook2/Hook2'
import Hook3 from './Hook3/Hook3'
import Hook4 from './Hook4/Hook4'

function Hooks() {
    
    return (
        <div className={style.hooks_div}>
            <Hook1/>
            <Hook2/>
            <Hook3 price={30}/>
            <Hook4/>
        </div>
    )
}

export default Hooks;
