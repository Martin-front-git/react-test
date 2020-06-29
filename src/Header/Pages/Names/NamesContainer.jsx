import React from 'react';
import { addPostActionCreator, onPostActionCreator } from '../../../store/Reducers/NameReducer';
import Names from './Names';
import StoreContext from '../../../StoreContext/storeContext';

const NamesContainer =()=>{
    return(
        <StoreContext.Consumer>{
            (store)=>{
                let state = store.getState();
                let addPost =()=>{
                    store.dispatch(addPostActionCreator())
                }
                
                let onPostChange =(text)=>{
                    let action = onPostActionCreator(text);
                    store.dispatch(action);
                }
                return (
                    <Names addPost={addPost} 
                            onPostActionCreator={onPostChange} 
                            NameList={state.NamePage.NameList}
                            Textarea={state.NamePage.Textarea}/>)        
        }}
        </StoreContext.Consumer>  
    )
}

export default NamesContainer;