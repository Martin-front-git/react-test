const { createStore, combineReducers } = require("redux");
const { default: NameReducer } = require("./Reducers/NameReducer");
const { default: MessageReducer } = require("./Reducers/MessageReducer");


let reducers = combineReducers({
    MessagePage : MessageReducer,
    NamePage : NameReducer
});

let store = createStore(reducers);

export default store;