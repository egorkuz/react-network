import React from 'react';
import style from './CommentarySign.module.css';
import commentary from '../../../assets/images/commentary.png'

const CommentarySign = (props) => {
    return (<div className={props.className} onClick={props.onClick}>
    <img className={style.commentary} src={commentary} />
    </div>
    )
}

export default CommentarySign;
