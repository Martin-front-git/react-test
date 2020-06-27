import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './page2.module.scss';
import { addMessageActionCreator, onMessageActionCreator } from '../../store/Reducers/MessageReducer';

const Page2 =(props)=>{
    let MessageConst = props.MessagePage.MessageList.map(ms=><NavLink className={style.messages} to={ms.id}>{ms.message}</NavLink>)
    
    let areaRef = React.createRef();
    let messageAdd =()=>{
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange =()=>{
        let text = areaRef.current.value;
        props.dispatch(onMessageActionCreator(text));
    }
    return(
       <div className={style.mes_block}>
        <div className={style.area_div}>
            <textarea onChange={onMessageChange} ref={areaRef} className={style.area} value={props.AreaValue}/>
            <button onClick={messageAdd} className={style.btn}>knopka</button>
        </div>
        <div className={style.message_div}>
            {MessageConst}
        </div>
       </div>
    )
}

export default Page2;