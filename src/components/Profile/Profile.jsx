import React from 'react';
import PostsContain from './Posts/PostsContain'
import ProfileInfoWithRouter from './ProfileInfo/ProfileInfo'
import style from './Profile.module.css';

const Profile = React.memo(props => {
    /*
    if we dont use PureComponent
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps!=this.props||nestState!=this.state
    }*/
    return (
    <div>
     <div className={style.profile__hero}></div>
        <ProfileInfoWithRouter currentProfile={props.currentProfile} status = {props.status} profile={props.profile} updateStatusThunk={props.updateStatusThunk} autorizedUserId={props.autorizedUserId}/>
        {props.userId==props.autorizedUserId?<PostsContain userName={props.userName}/>:null}
    </div>)})

export default Profile;