import React from 'react';
import { addMessageActionCreator, onMessageActionCreator } from '../../../store/Reducers/MessageReducer';
import Messages from './Messages';
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
        MessageList: state.MessagePage.MessageList,
        AreaValue : state.MessagePage.AreaValue
    }
}
let mapDispachToProps=(dispatch)=>{
    return{
        addMessage: ()=>{
            dispatch(addMessageActionCreator());
        },
        onMessageChange:(text)=>{
            let action = onMessageActionCreator(text);
            dispatch(action);
        }
    }
}

let MessagesContainer = connect(mapStateToProps,mapDispachToProps)(Messages);
export default MessagesContainer;