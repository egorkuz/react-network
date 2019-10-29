import React from 'react';
import style from './Post.module.css';
import LikeSign from '../../../common/LikeSign/LikeSign'

const Post = (props) => {
        return (
        <div className={style.post_wrapper}>
                <p>{props.name}</p>
                <p className={style.post__message}>{props.message}</p>
        {/*{props.commentary.userId===props.userId?<button type="submit" onClick={()=>props.deleteCommentaryForNews(props.newsId,props.commentary._id)}>Удалить</button>:null}*/} 
        {/*{props.newsDataToNewsComponent.usersLikes.some(user=>user==props.userId)?
        <LikeSign className={style.post__likeAndCommentaryPanel__likeSign + ' ' + style.isLiked}/>:*/}
        <section className={style.post__likeAndLikesCountPanel}>
        <LikeSign className={style.post__likeAndCommentaryPanel__likeSign}/>
        <p className={style.likeAndCommentaryPanel__likeSign}>0</p>
        </section>
        </div>)} 


export default Post;