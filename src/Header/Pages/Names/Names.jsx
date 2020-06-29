import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Names.module.scss';
import { connect } from 'react-redux';


const Names = (props) => {
    const { NameList } = props
    console.log("Props", props)
    const NameConst = NameList && NameList.map(nm=><NavLink className={style.names} to={nm.id}>{nm.name}</NavLink>)
    
    let newPost = React.createRef();

    let onAddPost =()=>{
        props.addPost();
    }
    let onPostChange =()=>{
        let text = newPost.current.value;
        props.onPostActionCreator(text);
    }
    return(
        <div className={style.names_block}>
            <div className={style.names_div}>
                {NameConst}
            </div>
            <div className={style.area_div}>
                <textarea onChange={onPostChange} ref={newPost} className={style.area} value={props.Textarea}/>
                <button onClick={onAddPost} className={style.btn}>Knopka</button>
            </div>
        </div>
    )
}

const get = state => {
    return {
        NameList: state.NamePage.NameList
    }
}

export default connect(get)(Names);