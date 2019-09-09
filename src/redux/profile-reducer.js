import usersAPI, {profileAPI} from '../api/api'


const ADD_POST = 'profile-reducer/ADD-POST';
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialProfilePage = {
    postsData: [
        {id: 1, message: "Я на Бали"},
        {id: 2, message: "Я на Багамах"},
        {id: 3, message: "Я на Гаваях"},
        {id: 4, message: "Я в Майами"},
        {id: 5, message: "Я в Амстердаме"}
    ],
    newPostText: 'Imma ride',
    profile: null,
    status: ''
}
const profileReducer = (state=initialProfilePage,action) => {
    switch(action.type) { 
        case ADD_POST: 
            let newPost = {
            id: 6,
            message: action.newPostTextValue
            }
            return ({
                ...state,
                postsData: [...state.postsData,newPost],
                newPostText: ''
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
        default:
            return state}}



export const addPostCreator = (newPostTextValue) => ({type: ADD_POST,newPostTextValue})
export const deletePostCreator = (postId) => ({type: DELETE_POST,postId})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE,profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})


export const setUserProfileThunk = (userId) => async (dispatch) => {
    let res = await usersAPI.getUserProfile(userId)    
            dispatch(setUserProfile(res.data))}
            
export const getUserStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(res=>{
            dispatch(setUserStatus(res.data))
        })
    }
}

export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(
        res => { if(res.data.resultCode===0){
            dispatch(setUserStatus(status))
        }}
        )
    }
}

export default profileReducer;