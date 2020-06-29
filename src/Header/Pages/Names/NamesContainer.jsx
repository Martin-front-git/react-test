import React from 'react';
import { addPostActionCreator, onPostActionCreator } from '../../../store/Reducers/NameReducer';
import Names from './Names';



const NamesContainer =(props)=>{

    let state = props.store.getState();
    
    let addPost =()=>{
        props.store.dispatch(addPostActionCreator())
    }
    
    let onPostChange =(text)=>{
        let action = onPostActionCreator(text);
        props.store.dispatch(action);
    }
    return(
        <Names addPost={addPost} 
                onPostActionCreator={onPostChange} 
                NameList={state.NamePage.NameList}
                Textarea={state.NamePage.Textarea}/>
    )
}

export default NamesContainer;