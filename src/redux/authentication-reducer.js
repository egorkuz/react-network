import {authenticationAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const SET_AUTHENTICATION_USER_DATA = 'authentication-reducer/SET_AUTHENTICATION_USER_DATA'

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authenticationReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_AUTHENTICATION_USER_DATA: {
            return {
                ...state,
                ...action.data}}
        default:
            return state;
}}

export const setAuthUserData = (email,id,login,isAuth) => ({type: SET_AUTHENTICATION_USER_DATA, data: {
    email,id,login,isAuth}})

export const loginH = (email,password) => async (dispatch) => {
    let res = await authenticationAPI.login(email,password)
    if (res.status===200) {
        dispatch(setAuthUserData("microblogworkingmail@mail.ru",1355,"MagicMan",true,null))
    }
    else if(res.resultCode===1) {
        let message = res.messages.length>0?res.messages[0]:undefined
        dispatch(stopSubmit('login',{_error: message}))
}}

export const logout = () => async (dispatch) => {
    let res = await authenticationAPI.logout()
    if (res.resultCode===0) {
        dispatch(setAuthUserData(null,null,null,false))
}}

export default authenticationReducer;