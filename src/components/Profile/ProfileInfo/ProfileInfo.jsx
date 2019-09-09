import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'
import Status from './Status/StatusWithHooks'

class ProfileInfo extends React.Component {
    render(){
        
    if (!this.props.profile) {
        return <Preloader />
    }
    return (
        <section className={styles.profileInfo}>
            {this.props.profile.photos.small==null?<img className={styles.profileInfo__avatar} src="http://www.galerieserge.ru/pic/ava/noava.png" alt="noAva"/>:<img className={styles.profileInfo__avatar} src={this.props.profile.photos.small} alt="avatar"/>}
            <Status status = {this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
            <p>Имя: {this.props.profile.fullName}</p>
            <p>Город: LA, USA</p>
            {this.props.profile.lookingForAJob?<p>Место работы: Ищу работу</p>:<p>Статус: И так богатый</p>}   
        </section>
    )
    }}
export default ProfileInfo