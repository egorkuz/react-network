import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
        return (
            <div className={styles.post_wrapper}>
                <p>{props.name}</p>
                <p>{props.message}</p>
                <p>{new Date(Date.now()).toLocaleTimeString()}</p>   
                <button className={styles.button + ' ' + styles.like}>Like</button>
                <button className={styles.button + ' ' + styles.dislike}>Dislike</button>
            </div>)
    } 


export default Post;