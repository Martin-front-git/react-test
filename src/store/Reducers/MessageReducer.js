const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const MessageReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.AreaValue,
      };
      state.MessageList.push(newMessage);
      state.AreaValue = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.AreaValue = action.newText;
      return state;
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
