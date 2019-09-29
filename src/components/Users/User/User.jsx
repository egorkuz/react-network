import React from 'react';
import styles from './User.module.css';
import {NavLink} from 'react-router-dom';

const User = (props) => {
    return (
    <section className={styles.user}>
    <div className={styles.user__image}>
        <figure>
        <NavLink className={styles.user__image__avatar} to={`/profile/${props.userData.id}`}>
        <img src={props.userData.image === undefined ? "https://i.pinimg.com/236x/19/93/93/1993934932cca30fa70f3ffed2a62479--justin-bieber-quotes-swag.jpg" : props.userData.image  } alt="love"/>
        </NavLink> 
        </figure>
            {props.userData.followed?
            <button disabled={props.followingInProgress.some(id => id===props.userData.id)} 
            className={styles.button + ' ' + styles.button_unfollow} 
            onClick={() => {props.unFollowThunk(props.userData.id)}}>Отписаться</button>
            :
            <button disabled={props.followingInProgress.some(id => id===props.userData.id)} 
            className={styles.button + ' ' + styles.button_follow} 
            onClick={()=>{props.followThunk(props.userData.id)
            }}>Подписаться</button>}
    </div>
    <div className={styles.user__body} key={props.userData.id}>
        <p>{props.userData.name}</p>
        <span>LA, </span>
        <span>USA</span>
        <p>{props.userData.id}</p>
        <p className={styles.user__status}>{props.userData.status}</p>
    </div>
    </section>
    )
}
/*<section className={classes.user}>
<div className={classes.user__image}>
    <figure>
        <img src={props.userData.image} alt="love"/>
    </figure>
    {props.userData.followed ? 
    <button className={classes.button + ' ' + classes.button_unfollow} onClick={() => {props.unfollow(props.userData.id)}}>Отписаться</button> : 
    <button className={classes.button + ' ' + classes.button_follow} onClick={()=>{props.follow(props.userData.id)}}>Подписаться</button>}
</div>
<div className={classes.user__body} key={props.userData.id}>
    <p>{props.userData.name}</p>
    <span>{`${props.userData.location.city}, `}</span>
    <span>{props.userData.location.country}</span>
    <p>{props.userData.status}</p>
</div>
</section>*/
      /*props.toggleFollowingInProgress(true,props.userData.id)
            getUsersAPI.unFollowUser(props.userData.id).then(res=>{
        if (res.resultCode==0){
            props.unfollow(props.userData.id)
            }
            props.toggleFollowingInProgress(false,props.userData.id)
        })*/
/*props.toggleFollowingInProgress(true,props.userData.id)
            getUsersAPI.followUser(props.userData.id).then(res=>{
            if (res.resultCode==0){
                props.follow(props.userData.id)
            }
            props.toggleFollowingInProgress(false,props.userData.id)         
    })*/
export default User;