import {authAPI,securityAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const GET_CAPTCHA_URL_SUCESS = 'auth-reducer/GET_CAPTCHA_URL_SUCESS'

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                //isAuth: true
            } 
        }
        case GET_CAPTCHA_URL_SUCESS: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default:
            return state;
      }
}

export const setAuthUserDataThunk = () => async (dispatch) => {
        let res = await authAPI.authMe()
        if (res.resultCode===0) {
                dispatch(setAuthUserData(res.data.email,res.data.id,res.data.login,true))}
            }
export const setAuthUserData = (email,id,login,isAuth) => ({type: SET_AUTH_USER_DATA, data: {
    email, id, login,isAuth}})

export const login = (email,password,rememberMe,captcha) => async (dispatch) => {
    let res = await authAPI.login(email,password,rememberMe,captcha)
    console.log(res)
    if (res.resultCode===0) {
        dispatch(setAuthUserDataThunk())
    }
    else if(res.resultCode===1) {
        let message = res.messages.length>0?res.messages[0]:undefined
        dispatch(stopSubmit('login',{_error: message}))
    }
    else if(res.resultCode===10) {
        dispatch(getCaptchaUrl())
    }
}
export const logout = () => async (dispatch) => {
    let res = await authAPI.logout()
    if (res.resultCode===0) {
        dispatch(setAuthUserData(null,null,null,false))
}}
export const getCaptchaUrlSucess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCESS,captchaUrl
})
export const getCaptchaUrl = () => async (dispatch) => {
    const captchaUrl = await securityAPI.getCaptchaUrl()
        dispatch(getCaptchaUrlSucess(captchaUrl))
}
export default authReducer;