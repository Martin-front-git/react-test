const ADD_POST = 'ADD-POST';
const UPDATE_NEW_NAME_TEXT = 'UPDATE-NEW-NAME-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state : {
        NamePage : {
            NameList : [
                {id:1, name : 'Martin'},
                {id:2, name : 'Arman'},
                {id:3, name : 'Karen'},
                {id:4, name : 'Vahan'},
            ],
            Textarea : 'Hello World'
        },
        MessagePage : {
            MessageList : [
                {id : 1, message : 'Hello Martin'},
                {id : 2, message : 'How are you?'},
                {id : 3, message : 'My name is Lara Croft'},
                {id : 4, message : 'I am Frontend Developer'}
            ],
            AreaValue : 'Hello Martin'
        }
    },
    getState() {
        return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },
    _callSubscriber(){
        console.log('state is changed !!');
    },

    dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPost= {
                id : 5,
                name : this._state.NamePage.Textarea
            }
            this._state.NamePage.NameList.push(newPost);
            this._state.NamePage.Textarea = '';
            this._callSubscriber(this._state);
        }
        else if(action.type === 'UPDATE-NEW-NAME-TEXT'){
            this._state.NamePage.Textarea = action.newText;
            this._callSubscriber(this._state);
        }
        else if(action.type === 'ADD-MESSAGE'){
            let newMessage= {
                id : 5,
                message : this._state.MessagePage.AreaValue
            }
            this._state.MessagePage.MessageList.push(newMessage);
            this._state.MessagePage.AreaValue = '';
            this._callSubscriber(this._state);
        }
        else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.MessagePage.AreaValue = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


export const addPostActionCreator=()=>{
    return { type : ADD_POST}
}
export const onPostActionCreator=(text)=>{
    return { type : UPDATE_NEW_NAME_TEXT, newText : text}
}
export const addMessageActionCreator=()=>{
    return { type : ADD_MESSAGE}
}
export const onMessageActionCreator=(text)=>{
    return { type : UPDATE_NEW_MESSAGE_TEXT, newText : text}
}

export default store;