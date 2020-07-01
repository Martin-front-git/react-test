const ADD_POST = "ADD-POST";
const UPDATE_NEW_NAME_TEXT = "UPDATE-NEW-NAME-TEXT";

let initialState = {
  NameList : [
      {id:1, name : 'Martin'},
      {id:2, name : 'Arman'},
      {id:3, name : 'Karen'},
      {id:4, name : 'Vahan'},
      {id:5, name : 'Artur'},
  ],
  Textarea : 'Hello World'
}


const NameReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case UPDATE_NEW_NAME_TEXT:{
      return {
        ...state,
        Textarea : action.newText
      }
    }
    case ADD_POST: {
      return  {
        ...state,
        Textarea : "",
        NameList : [...state.NameList,{id: 5,name: state.Textarea}]
      }
    } 
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
