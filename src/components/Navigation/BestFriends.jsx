import React from 'react';
import {useState} from 'react'
import style from './BestFriends.module.css';
import Preloader from './../common/Preloader/Preloader'
import {NavLink} from 'react-router-dom';
import {withRouter} from "react-router";
import {connect} from "react-redux"
import {setCurrentProfile} from '../../redux/users-reducer'

const BestFriends = (props) => {
    return (
    <div className={style.bestfriends}>
    {props.bestFriends.length!==0?
    <section className={style.bestfriends_persons}>
          <p>Друзья</p>
          <ul>
          <li><NavLink onClick={()=>{setCurrentProfile(props.bestFriends[0].id)}} to={`/profile/${props.bestFriends[0].id}`}>{props.bestFriends[0].name}</NavLink></li>
          <li><NavLink onClick={()=>{setCurrentProfile(props.bestFriends[1].id)}} to={`/profile/${props.bestFriends[1].id}`}>{props.bestFriends[1].name}</NavLink></li>
          <li><NavLink onClick={()=>{setCurrentProfile(props.bestFriends[2].id)}} to={`/profile/${props.bestFriends[2].id}`}>{props.bestFriends[2].name}</NavLink></li>
          </ul>
    </section>:<Preloader />} 
    </div>)}

let mapStateToProps = (state) => {
      return {

      }
}

const BestFriendsContain = connect(mapStateToProps)(BestFriends)

const BestFriendsWithRouter = withRouter(BestFriendsContain)

export default BestFriendsWithRouter