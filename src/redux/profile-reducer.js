import usersAPI, {profileAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const ADD_POST = 'profile-reducer/ADD-POST';
const DELETE_POST = 'profile-reducer/DELETE_POST'
const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE'
const SET_USER_STATUS = 'profile-reducer/SET_USER_STATUS'
const SAVE_PHOTO_SUCESS = "profile-reducer/SAVE_PHOTO_SUCESS"
const GET_POSTS_DATA_SUCESS = "profile-reducer/GET_POSTS_DATA_SUCESS"

let initialProfilePage = {
    postsData: [],
    newPostText: 'Whats up?',
    profile: null,
    status: ''
}
const profileReducer = (state=initialProfilePage,action) => {
    switch(action.type) { 
        // case ADD_POST: 
        //     return ({
        //         ...state,
        //         postsData: [...action.posts],
        //         newPostText: ''
        //     })
        case GET_POSTS_DATA_SUCESS:
            return ({
                ...state,
                postsData: [...action.postsData].reverse()
            })
        case SET_USER_PROFILE:{
        return({
            ...state,
            profile: action.profile
        })}
        case SET_USER_STATUS:{
            return({
                ...state,
                status: action.status
            })
        }
        case DELETE_POST: {

            return({
                ...state,
                postsData: state.postsData.filter(post=>post.id!=action.postId)
            })
        } 
        case SAVE_PHOTO_SUCESS: {
            return(
                {
                    ...state,
                    profile:{...state.profile,photos: action.photos} 
                }
            )
        }
        default:
            return state}}



export const getPostsDataSucess = (postsData) => ({type: GET_POSTS_DATA_SUCESS,postsData})

export const getPosts = (userId) => async (dispatch) => {
    let res = await profileAPI.getPosts(userId)
    if (res.status===200){
    dispatch(getPostsDataSucess(res.data))  
}}
export const addPost = (userId,newPostTextValue) => async (dispatch)=>{
    let res = await profileAPI.savePost(userId,newPostTextValue)
    if (res.status===200){
    dispatch(getPosts(userId))}
}
export const deletePost = (postId,userId) => async (dispatch)=>{
    let res = await profileAPI.deletePost(postId)
    if (res.status===200){
    dispatch(getPosts(userId))}
}
export const addLike = (postId,userId) => async (dispatch)=>{
    let res = await profileAPI.addLike(postId,userId)
    if (res.status===200){
    dispatch(getPosts(userId))}
}
export const deleteLike = (postId,userId) => async (dispatch)=>{
    let res = await profileAPI.deleteLike(postId,userId)
    if (res.status===200){
    dispatch(getPosts(userId))}
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE,profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const savePhotoSucess = (photos) => ({type: SAVE_PHOTO_SUCESS, photos})

export const setUserProfileThunk = (userId) => async (dispatch) => {
    let res = await usersAPI.getUserProfile(userId)    
            dispatch(setUserProfile(res.data))}
            
export const getUserStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(res=>{
            dispatch(setUserStatus(res.data))
})}}

export const updateStatusThunk = (status) => async (dispatch) => {
    try {
        let res = await profileAPI.updateStatus(status)
        if(res.data.resultCode===0){
            dispatch(setUserStatus(status))}}
    catch(err) {}}

export const uploadPhoto = (file) => async (dispatch) => {
    let res = await profileAPI.uploadPhoto(file);
    if (res.data.resultCode===0){
        dispatch(savePhotoSucess(res.data.data.photos))
    }
}
export const saveProfileChanges = (formData) => async (dispatch,getState) => {
    const userId = getState().auth.id
    let res = await profileAPI.saveProfileChanges(formData);
        if(res.data.resultCode===0) {
            dispatch(setUserProfileThunk(userId))
        }
        else {
            console.log(res.data.messages)
            let message = res.data.messages[0]
            dispatch(stopSubmit("ProfileInfoEditMode",{_error: message}))
        }
}
export default profileReducer;
// {id: 1, message: "Я на Бали"},
// {id: 2, message: "Я на Багамах"},
// {id: 3, message: "Я на Гаваях"},
// {id: 4, message: "Я в Майами"},
// {id: 5, message: "Я в Амстердаме"}