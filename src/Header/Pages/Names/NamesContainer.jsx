import React from 'react';
import { addPostActionCreator, onPostActionCreator } from '../../../store/Reducers/NameReducer';
import { connect } from 'react-redux';
import Names from './Names';

// const NamesContainer =()=>{
//     return(
//         <StoreContext.Consumer>{
//             (store)=>{
//                 let state = store.getState();
//                 let addPost =()=>{
//                     store.dispatch(addPostActionCreator())
//                 }
                
//                 let onPostChange =(text)=>{
//                     let action = onPostActionCreator(text);
//                     store.dispatch(action);
//                 }
//                 return (
//                     <Names addPost={addPost} 
//                             onPostActionCreator={onPostChange} 
//                             NameList={state.NamePage.NameList}
//                             Textarea={state.NamePage.Textarea}/>)        
//         }}
//         </StoreContext.Consumer>  
//     )
//     }
    let mapStateToProps=(state)=>{
        return{
            NameList :state.NamePage.NameList,
            Textarea : state.NamePage.Textarea
        }
    }
    let mapDispatchToProps=(dispatch)=>{
        return{
            addPost :()=>{
                dispatch(addPostActionCreator())
            },
            onPostChange:(text)=>{
                let action = onPostActionCreator(text);
                dispatch(action);
            }
        }
    }

const NamesContainer = connect(mapStateToProps,mapDispatchToProps)(Names); 

export default NamesContainer;