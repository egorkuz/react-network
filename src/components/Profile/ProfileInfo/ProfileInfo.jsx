import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'
import Status from './Status/StatusWithHooks'

class ProfileInfo extends React.Component {
    onAvatarUploading = (e) => {
        if(e.target.files.length) {this.props.savePhoto(e.target.files[0])}
    }
    render(){
    if(!this.props.profile){return <Preloader />}
    return (
        <section className={style.profileInfo}>
            {this.props.profile.photos.small==null?<img className={style.profileInfo__avatar} src="http://www.galerieserge.ru/pic/ava/noava.png" alt="noAva"/>:<img className={style.profileInfo__avatar} src={this.props.profile.photos.small} alt="avatar"/>}
            {this.props.autorizedUserProfile?<input onChange={this.onAvatarUploading()} className={style.profileInfo__uploadAvatar} type="file" />:null}
            {this.props.profile.userId!=this.props.autorizedUserId?<p>{this.props.status}</p>:<Status status = {this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>}
            <p>Имя: {this.props.profile.fullName}</p>
            <p>Город: LA, USA</p>
            <p>Возраст: 18 лет</p>
            {this.props.profile.lookingForAJob?<p>Ищу работу с зп от 10k$/mon.</p>:null}   
        </section>
    )
}}

export default ProfileInfo