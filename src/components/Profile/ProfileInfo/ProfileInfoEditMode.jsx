import React,{useState,useEffect} from 'react';
import style from './ProfileInfo.module.css';
import {Contact} from './ProfileInfo'
import Status from './Status/StatusWithHooks'
import {CreateField, Input} from '../../common/ValidationForms/ValidationForms'
import {reduxForm} from 'redux-form'
import {withRouter} from 'react-router-dom'
import NavigationPrompt from "react-router-navigation-prompt"
import ConfirmNavigationModal from '../../common/ConfirmNavigationModal/ConfirmNavigationModal'

const ProfileInfoEditMode = (props) => {
    const[isBlocking,setIsBlocking] = useState(true)
    return <form onSubmit={props.handleSubmit}>
        <NavigationPrompt when={isBlocking}>
  {({ onConfirm, onCancel }) => (
    <ConfirmNavigationModal
      when={true}
      onCancel={onCancel}
      onConfirm={props.handleSubmit}
    />
  )}
</NavigationPrompt> 
    {props.profile.photos.small==null?<img className={style.profileInfo__avatar} src="http://www.galerieserge.ru/pic/ava/noava.png" alt="noAva"/>:<img className={style.profileInfo__avatar} src={props.profile.photos.small} alt="avatar"/>}
    {props.autorizedUserProfile?<label className={style.profileInfo__uploadAvatar}>Загрузить фото<input onChange={props.onAvatarUploading} className={style.profileInfo__uploadAvatar} name="Изменить аватар" type="file" /></label>:null}
    {props.autorizedUserProfile?<button type="submit" className={style.profileInfo__editMode}>Сохранить изменения</button>:null}
    {props.profile.userId!=props.autorizedUserId?<p>{props.status}</p>:<Status status = {props.status} updateStatusThunk={props.updateStatusThunk}/>}
    <p><b>Имя:</b> {props.profile.fullName}</p> {CreateField([],"Full name","fullName",Input,null,style.profileInfoEditMode__input)}
    <p><b>Город:</b> LA, USA</p>
    <p><b>Возраст: </b> 18 лет</p>
    <p><b>Обо мне: </b>{props.profile.aboutMe}</p> {CreateField([],"About me","aboutMe",Input,null,style.profileInfoEditMode__input)}
    <span><b>Место работы: </b></span>{props.profile.lookingForAJob?<p>Ищу работу</p>:<span>Не ищу работу</span>}{CreateField([],"Looking for a job","lookingForAJob",Input,{type: "checkbox"},style.profileInfoEditMode__checkbox)}
    <p><b>Контакты: </b></p>
    {Object.keys(props.profile.contacts).map((key,index)=>{return <div><Contact key={key} error={props.error} contactTitle={key} contactValue={props.profile.contacts[index]}/>{CreateField([],`${key}`,`Contacts.${key}`,Input,{},style.profileInfoEditMode__input)}</div>})}
    </form>
}           

let ProfileInfoEditModeReduxForm = reduxForm({form: "ProfileInfoEditMode"})(ProfileInfoEditMode)

ProfileInfoEditModeReduxForm = withRouter(ProfileInfoEditModeReduxForm)

export default ProfileInfoEditModeReduxForm