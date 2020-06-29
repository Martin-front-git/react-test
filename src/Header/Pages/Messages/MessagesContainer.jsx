import React from 'react';
import { addMessageActionCreator, onMessageActionCreator } from '../../../store/Reducers/MessageReducer';
import Messages from './Messages';
//import StoreContext from '../../../StoreContext/storeContext';
import { connect } from 'react-redux';

// const MessagesContainer =()=>{
//     return(
//         <StoreContext.Consumer>{
//             (store)=>{
//                 let state = store.getState();
    
//                 let addMessage =()=>{
//                     store.dispatch(addMessageActionCreator());
//                 }
//                 let onMessageChange =(text)=>{
//                     let action = onMessageActionCreator(text);
//                     store.dispatch(action);
//                 }
//                 return(
//                     <Messages addMessage={addMessage} 
//                                 onMessageActionCreator={onMessageChange}
//                                 MessageList={state.MessagePage.MessageList}
//                                 AreaValue={state.MessagePage.AreaValue}/>)
//             }}
//         </StoreContext.Consumer>
//     )
// }
let mapStateToProps=(state)=>{
    return{
        MessageList:state.MessageList,
        AreaValue:state.AreaValue
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addMessage:()=>{
            dispatch(addMessageActionCreator());
        },
        onMessageChange:(text)=>{
            let action = onMessageActionCreator(text);
                    dispatch(action);
        }
    }
}

let MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);

export default MessagesContainer;