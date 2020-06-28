const ADD_POST = "ADD-POST";
const UPDATE_NEW_NAME_TEXT = "UPDATE-NEW-NAME-TEXT";

let initialState = {
  NameList : [
      {id:1, name : 'Martin'},
      {id:2, name : 'Arman'},
      {id:3, name : 'Karen'},
      {id:4, name : 'Vahan'},
  ],
  Textarea : 'Hello World'
}


const NameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        name: state.Textarea,
      };
      state.NameList.push(newPost);
      state.Textarea = "";
      return state;
    case UPDATE_NEW_NAME_TEXT:
      state.Textarea = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator=()=>{
    return { type : ADD_POST}
}
export const onPostActionCreator=(text)=>{
    return { type : UPDATE_NEW_NAME_TEXT, newText : text}
}

export default NameReducer;
