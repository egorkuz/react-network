import React from 'react';
import style from './Post.module.css';
import LikeSign from '../../../common/LikeSign/LikeSign'

const Post = (props) => {
        return (
        <div className={style.post_wrapper}>
                {props.userId===props.uid?<button type="submit" className={style.button_delete} onClick={()=>props.deletePost(props.postId,props.userId)}>Удалить</button>:null}
                <p>{props.name}</p>
                <p>{props.date}</p>
                <p className={style.post__message}>{props.postText}</p>
        <section className={style.post__like}>
        {props.usersLikes.some(user=>user==props.userId)?
        <LikeSign onClick={()=>props.deleteLike(props.postId,props.userId)} className={style.post__likeSign + ' ' + style.isLiked}/>:
        <LikeSign onClick={()=>props.addLike(props.postId,props.userId)} className={style.post__likeSign}/>}
            <p className={style.post__likesCount}>{props.likes}</p>
        </section>
        </div>)} 

export default Post;