import React from 'react';
import style from './BestFriends.module.css';
import Preloader from './../common/Preloader/Preloader'
import {NavLink} from 'react-router-dom';
import {withRouter} from "react-router";
import {connect} from "react-redux"
import {getUserStatusThunk, setUserProfileThunk} from "../../redux/profile-reducer"

const BestFriends = (props) => {
    return (
    <div className={style.bestfriends}>
    {props.bestFriends.length!==0?
    <section className={style.bestfriends_persons}>
          <p>Друзья</p>
          <ul>
          <li><NavLink onClick={()=>{
                props.setUserProfileThunk(props.bestFriends[0].id)
                props.getUserStatusThunk(props.bestFriends[0].id)
                }} to={`/profile/${props.bestFriends[0].id}`}>{props.bestFriends[0].name}</NavLink></li>
          <li><NavLink onClick={()=>{props.setUserProfileThunk(props.bestFriends[1].id)
                                     props.getUserStatusThunk(props.bestFriends[1].id)
      }} to={`/profile/${props.bestFriends[1].id}`}>{props.bestFriends[1].name}</NavLink></li>
          <li><NavLink onClick={()=>{props.setUserProfileThunk(props.bestFriends[2].id)
      props.getUserStatusThunk(props.bestFriends[2].id)
      }} to={`/profile/${props.bestFriends[2].id}`}>{props.bestFriends[2].name}</NavLink></li>
          </ul>
    </section>:<Preloader />} 
    </div>)}


const BestFriendsContain = connect(null,{getUserStatusThunk,setUserProfileThunk})(BestFriends)

const BestFriendsWithRouter = withRouter(BestFriendsContain)

export default BestFriendsWithRouter