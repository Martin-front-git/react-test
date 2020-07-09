import NameReducer from "./Reducers/NameReducer";
import MessageReducer from "./Reducers/MessageReducer";
import UsersReducer from "./Reducers/UsersReducer";


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

        this._state.NamePage =  NameReducer(this._state.NamePage, action);
        this._state.MessagePage =  MessageReducer(this._state.MessagePage, action);
        this._state.UsersPage =  UsersReducer(this._state.UsersPage, action);
        this._callSubscriber(this._state);
        
    }
}
export default store;