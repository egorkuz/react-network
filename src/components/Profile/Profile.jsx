import React from 'react';
import PostsContain from './Posts/PostsContain'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './Profile.module.css';

const Profile = (props) => {
    /*
    if we dont use PureComponent
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps!=this.props||nestState!=this.state
    }*/
    return (
    <div>
     <div className={style.profile__hero}></div>
        <ProfileInfo userId={props.userId} 
        currentProfile={props.currentProfile} 
        status = {props.status} profile={props.profile} 
        updateStatusThunk={props.updateStatusThunk} 
        autorizedUserId={props.autorizedUserId} 
        autorizedUserProfile={props.autorizedUserProfile}
        uploadPhoto={props.uploadPhoto}
        saveProfileChanges={props.saveProfileChanges}
        />
        {props.userId==props.autorizedUserId||props.userId==undefined?<PostsContain userName={props.userName}/>:null}
    </div>)}

export default Profile;