import React from 'react';
import style from './LikeSign.module.css';
import like from '../../../assets/images/like.png'

const LikeSign = (props) => {
    return <input type="image" src={like} className={props.className} onClick={props.onClick} disables={props.disabled}/>
}

export default LikeSign;
//
//return <div className={props.className} onClick={props.onClick}>
//<img className={style.preloader} src={like} />
//</div>