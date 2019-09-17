import React from 'react';
import PostsContain from './Posts/PostsContain'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import classes from './Profile.module.css';

const Profile = React.memo(props => {
    /*
    if we dont use PureComponent
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps!=this.props||nestState!=this.state
    }*/
    return (
    <div>
    <div className={classes.profile__hero}></div>
        <ProfileInfo status = {props.status} profile={props.profile} updateStatusThunk={props.updateStatusThunk} autorizedUserId={props.autorizedUserId}/>
        <PostsContain userName={props.userName}/>
    </div>)})

export default Profile;