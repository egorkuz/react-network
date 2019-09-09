import React from 'react';
import classes from './Message.module.css'

const Message = (props) => {
    return (
        <div className={classes.message}>
        <p>{props.text}</p>
        <span>{props.time}</span>
        </div>
    )
}
export default Message;
