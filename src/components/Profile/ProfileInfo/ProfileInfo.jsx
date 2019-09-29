import React,{useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'
import Status from './Status/StatusWithHooks'
import ProfileInfoEditModeReduxForm from './ProfileInfoEditMode';

const ProfileInfo = (props) => {
    const[editMode,setEditMode] = useState(false)
    const onAvatarUploading = (e) => {
        if(e.target.files.length) {props.uploadPhoto(e.target.files[0])}
    }
    if(!props.profile){return <Preloader />}
    
    return (
        <section className={style.profileInfo}>
            {editMode?<ProfileInfoEditModeReduxForm {...props} />:<ProfileInfoViewMode {...props} switchToEditMode={()=>{setEditMode(true)}} onAvatarUploading={onAvatarUploading}/>}  
        </section>
    )
}
export const Contact = ({contactTitle,contactValue}) => {
            return(<div>
                <em>{`${contactTitle}: `}</em>
                <span>{contactValue}</span>
                </div>)
}
const ProfileInfoViewMode = (props) => {
    return (<>
            {props.profile.photos.small==null?<img className={style.profileInfo__avatar} src="http://www.galerieserge.ru/pic/ava/noava.png" alt="noAva"/>:<img className={style.profileInfo__avatar} src={props.profile.photos.small} alt="avatar"/>}
            {props.autorizedUserProfile?<input onChange={props.onAvatarUploading} className={style.profileInfo__uploadAvatar} name="Изменить аватар" type="file" />:null}
            {props.autorizedUserProfile?<button type="submit" onClick={props.switchToEditMode} className={style.profileInfo__editMode}>Редактировать профиль</button>:null}
            {props.profile.userId!=props.autorizedUserId?<p>{props.status}</p>:<Status status = {props.status} updateStatusThunk={props.updateStatusThunk}/>}
            <p><b>Имя:</b> {props.profile.fullName}</p>
            <p><b>Город:</b> LA, USA</p>
            <p><b>Возраст:</b> 18 лет</p>
            <p><b>Контакты: </b></p>
            {props.profile.lookingForAJob?<p>Ищу работу с зп от 10k$/mon.</p>:null}
            {Object.keys(props.profile.contacts).map((key,index)=>{return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[index]}/>})}
            </>
            )
}
            

export default ProfileInfo