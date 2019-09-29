import React from 'react';
import style from './ProfileInfo.module.css';
import {Contact} from './ProfileInfo'
import Preloader from '../../common/Preloader/Preloader'
import Status from './Status/StatusWithHooks'
import {CreateField, Input} from '../../common/ValidationForms/ValidationForms'
import {reduxForm} from 'redux-form'

const ProfileInfoEditMode = (props) => {
    return <form>
    {props.profile.photos.small==null?<img className={style.profileInfo__avatar} src="http://www.galerieserge.ru/pic/ava/noava.png" alt="noAva"/>:<img className={style.profileInfo__avatar} src={props.profile.photos.small} alt="avatar"/>}
    {props.autorizedUserProfile?<input onChange={props.onAvatarUploading} className={style.profileInfo__uploadAvatar} name="Изменить аватар" type="file" />:null}
    {props.autorizedUserProfile?<button type="submit" className={style.profileInfo__editMode}>Сохранить изменения</button>:null}
    {props.profile.userId!=props.autorizedUserId?<p>{props.status}</p>:<Status status = {props.status} updateStatusThunk={props.updateStatusThunk}/>}
    <p><b>Имя:</b> {props.profile.fullName}</p> {CreateField([],"Full name","fullName",Input,style.profileInfoEditMode__input)}
    <p><b>Город:</b> LA, USA</p>
    <p><b>Возраст:</b> 18 лет</p>
    <p><b>Контакты: </b></p>
    {props.profile.lookingForAJob?<p>Ищу работу с зп от 10k$/mon.</p>:null}
    {Object.keys(props.profile.contacts).map((key,index)=>{return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[index]}/>})}
    </form>
}           

const ProfileInfoEditModeReduxForm = reduxForm({form: "ProfileInfoEditMode"})(ProfileInfoEditMode)

export default ProfileInfoEditModeReduxForm