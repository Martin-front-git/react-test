import React from 'react';
import { addMessageActionCreator, onMessageActionCreator } from '../../../store/Reducers/MessageReducer';
import Messages from './Messages';



const MessagesContainer =(props)=>{
    let state = props.store.getState();
    
    let addMessage =()=>{
        props.store.dispatch(addMessageActionCreator());
    }
    
    let onMessageChange =(text)=>{
        let action = onMessageActionCreator(text);
        props.store.dispatch(action);
    }
    return(
       <Messages 
       addMessage={addMessage} 
       onMessageActionCreator={onMessageChange}
       MessageList={state.MessagePage.MessageList}
       AreaValue={state.MessagePage.AreaValue}/> 
    )
}

export default MessagesContainer;