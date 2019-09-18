import React from 'react';
import PostsContain from './Posts/PostsContain'
import ProfileInfoWithRouter from './ProfileInfo/ProfileInfo'
import style from './Profile.module.css';

const Profile = (props) => {
    /*
    if we dont use PureComponent
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps!=this.props||nestState!=this.state
    }*/
    console.log(props)
    return (
    <div>
     <div className={style.profile__hero}></div>
        <ProfileInfoWithRouter userId={props.userId} currentProfile={props.currentProfile} status = {props.status} profile={props.profile} updateStatusThunk={props.updateStatusThunk} autorizedUserId={props.autorizedUserId}/>
        {props.userId==props.autorizedUserId||props.userId==undefined?<PostsContain userName={props.userName}/>:null}
    </div>)}

export default Profile;