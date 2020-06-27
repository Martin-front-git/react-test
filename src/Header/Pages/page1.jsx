import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './page1.module.scss';
import { addPostActionCreator, onPostActionCreator } from '../../store/Reducers/NameReducer';



const Page1 =(props)=>{
    const NameConst = props.NamePage.NameList.map(nm=><NavLink className={style.names} to={nm.id}>{nm.name}</NavLink>)
    
    let newPost = React.createRef();

    let addPost =()=>{
        //props.addPost(text);
        props.dispatch(addPostActionCreator())
    }
    let onPostChange =()=>{
        let text = newPost.current.value;
        //props.updateNewPostText(text);
        props.dispatch(onPostActionCreator(text))
    }
    return(
        <div className={style.names_block}>
            <div className={style.names_div}>
                {NameConst}
            </div>
            <div className={style.area_div}>
                <textarea onChange={onPostChange} ref={newPost} className={style.area} value={props.Textarea}/>
                <button onClick={addPost} className={style.btn}>Knopka</button>
            </div>
        </div>
    )
}

export default Page1;