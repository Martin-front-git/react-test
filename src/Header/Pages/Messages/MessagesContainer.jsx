import React from 'react';
import { addMessageActionCreator, onMessageActionCreator } from '../../../store/Reducers/MessageReducer';
import Messages from './Messages';
import StoreContext from '../../../StoreContext/storeContext';

const MessagesContainer =()=>{
    return(
        <StoreContext.Consumer>{
            (store)=>{
                let state = store.getState();
    
                let addMessage =()=>{
                    store.dispatch(addMessageActionCreator());
                }
                let onMessageChange =(text)=>{
                    let action = onMessageActionCreator(text);
                    store.dispatch(action);
                }
                return(
                    <Messages addMessage={addMessage} 
                                onMessageActionCreator={onMessageChange}
                                MessageList={state.MessagePage.MessageList}
                                AreaValue={state.MessagePage.AreaValue}/>)
            }}
        </StoreContext.Consumer>
    )
}

export default MessagesContainer;