import React from 'react';
import style from './BestFriends.module.css';
import Preloader from './../common/Preloader/Preloader'
import {NavLink} from 'react-router-dom';
import {withRouter} from "react-router";
import {connect} from "react-redux"
import {setCurrentWatcingUserProfile} from "../../redux/users-reducer"

class BestFriends extends React.Component {

    render(){
    return (
    <div className={style.bestfriends}>
    {this.props.bestFriends.length!==0?
    <section className={style.bestfriends_persons}>
          <p>Друзья</p>
          <ul>
          <li><NavLink onClick={()=>this.forceUpdate()} to={`/profile/${this.props.bestFriends[0].id}`}>{this.props.bestFriends[0].name}</NavLink></li>
          <li><NavLink onClick={()=>this.forceUpdate()} to={`/profile/${this.props.bestFriends[1].id}`}>{this.props.bestFriends[1].name}</NavLink></li>
          <li><NavLink onClick={()=>this.forceUpdate()} to={`/profile/${this.props.bestFriends[2].id}`}>{this.props.bestFriends[2].name}</NavLink></li>
          </ul>
    </section>:<Preloader />} 
    </div>)}}

let mapStateToProps = (state) => {
      return {
            currentWatchingUserProfileID: state.usersPage.currentWatchingUserProfileID
      }}

const BestFriendsContain = connect(mapStateToProps,{setCurrentWatcingUserProfile})(BestFriends)

const BestFriendsWithRouter = withRouter(BestFriendsContain)

export default BestFriendsWithRouter