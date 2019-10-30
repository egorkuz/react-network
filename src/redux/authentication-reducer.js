import {authenticationAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const SET_AUTHENTICATION_USER_DATA = 'authentication-reducer/SET_AUTHENTICATION_USER_DATA'

let initialState = {
    name: null,
    email: null,
    login: null,
    id: null,
    isAuth: false,
}

export const authReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data}}
        default:
            return state;
}}

export const getAuthUserData = () => async (dispatch) => {
        let res = await authAPI.authMe()
        if (res.resultCode===0) {
                dispatch(setAuthUserData(res.data.email,res.data.id,res.data.login,true))}
            }
export const setAuthUserData = (email,id,login,isAuth) => ({type: SET_AUTH_USER_DATA, data: {
    email, id, login,isAuth}})

export const login = (email,password,rememberMe) => async (dispatch) => {
    let res = await authAPI.login(email,password,rememberMe,captcha)
    if (res.resultCode===0) {
        dispatch(getAuthUserData())
    }
    else if(res.resultCode===1) {
        let message = res.messages.length>0?res.messages[0]:undefined
        dispatch(stopSubmit('login',{_error: message}))
}}

export const logout = () => async (dispatch) => {
    let res = await authAPI.logout()
    if (res.resultCode===0) {
        dispatch(setAuthUserData(null,null,null,false))
}}

export default authenticatonReducer;