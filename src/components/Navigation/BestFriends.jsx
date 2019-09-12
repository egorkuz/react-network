import React from 'react';
import style from './BestFriends.module.css';
import Preloader from './../common/Preloader/Preloader'
import {NavLink} from 'react-router-dom';

class BestFriends extends React.Component {
    render(){
    return (
    <div className={style.bestfriends}>
    {this.props.bestFriends.length!==0?
    <section className={style.bestfriends_persons}>
          <p>Друзья</p>
          <p className={style.bestfriend}>{this.props.bestFriends[0].name}</p>
          <p className={style.bestfriend}>{this.props.bestFriends[1].name}</p>
          <p className={style.bestfriend}>{this.props.bestFriends[2].name}</p>
    </section>:<Preloader />} 
    </div>)}}
  
  export default BestFriends