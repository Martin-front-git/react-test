import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Messages.module.scss';

const Messages =(props)=>{
    let MessageConst = props.MessageList.map(ms=><NavLink className={style.messages} to={ms.id}>{ms.message}</NavLink>)
    
    let areaRef = React.createRef();
    
    let addMessage =()=>{
        props.addMessage();
    }
    let onMessageChange =()=>{
        let text = areaRef.current.value;
        props.onMessageActionCreator(text);
    }
    return(
       <div className={style.mes_block}>
        <div className={style.area_div}>
            <textarea onChange={onMessageChange} ref={areaRef} className={style.area} value={props.AreaValue}/>
            <button onClick={addMessage} className={style.btn}>knopka</button>
        </div>
        <div className={style.message_div}>
            {MessageConst}
        </div>
       </div>
    )
}

export default Messages;