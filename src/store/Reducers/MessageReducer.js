const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  MessageList : [
      {id : 1, message : 'Hello Martin'},
      {id : 2, message : 'How are you?'},
      {id : 3, message : 'My name is Lara Croft'},
      {id : 4, message : 'I am Frontend Developer'}
  ],
  AreaValue : 'Hello Martin'
}


const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:{
      let newMessage = {
        id: 5,
        message: state.AreaValue,
      };
      let StateCopy = {...state};
      StateCopy.MessageList.push(newMessage);
      StateCopy.AreaValue = "";
      return StateCopy;
    }
      
    case UPDATE_NEW_MESSAGE_TEXT:{
      let StateCopy = {...state};
      StateCopy.AreaValue = action.newText;
      return StateCopy;
    }
      
    default:
      return state;
  }
};

export const addMessageActionCreator=()=>{
    return { type : ADD_MESSAGE}
}
export const onMessageActionCreator=(text)=>{
    return { type : UPDATE_NEW_MESSAGE_TEXT, newText : text}
}

export default MessageReducer;
