import usersAPI from '../api/api'
import {updateObjectsInArray} from '../utils/object-helpers'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
const SET_FIRST_THREE_USERS = "users-reducer/SET_FIRST_THREE_USERS"
const SET_CURRENT_WATCHING_USER_PROFILE = "user-reducer/SET_CURRENT_WATCHING_USER_PROFILE"

let initialUsers = {
        users:[],
        firstThreeUsers: [],
        pageSize: 2,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
        currentWatchingUserProfileID: undefined
}

export const usersReducer = (state = initialUsers,action) => {
    switch (action.type) {
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id===action.userID){
                        return ({...u, followed: true})
                    }
                    return u
                })
            }
            //users: updateObjectsInArray(state.users,'id',action.userID,{followed:true})
        }
        case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u=>{
                        console.log(u)
                        if (u.id===action.userID){
                            return ({...u, followed: false})
                        }
                        return u
                    })
                }
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        case SET_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userID]
                : state.followingInProgress.filter(id=>id!=action.userID)
            }
        }
        case SET_FIRST_THREE_USERS: {
            return {
                ...state,
                firstThreeUsers: action.firstThreeUsers
            }
        }
        case SET_CURRENT_WATCHING_USER_PROFILE: {
            return {
                ...state,
                currentWatcingUserProfileID: action.currentWatcingUserProfileID
            }
        }
        default:
            return state;
      }
}

export const getUsers = (currentPage,pageSize) => {
    return async (dispatch) => {
            dispatch(setIsFetching(true)) 
            dispatch(setCurrentPage(currentPage))
            let data = await usersAPI.getUsers(currentPage,pageSize)
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            data.totalCount>100?dispatch(setTotalUsers(55)):dispatch(setTotalUsers(data.totalCount))
}}
export const getFirstThreeUsers = () => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        let firstThreeUsers = await usersAPI.getFirstThreeUsers()
        dispatch(setFirstThreeUsers(firstThreeUsers.items))
        dispatch(setIsFetching(false))
        
    }
}
const followUnfollowFlow = async (id, dispatch, apiMethod,actionCreator) => {
    dispatch(toggleFollowingInProgress(true,id))
    let res = await apiMethod(id)
    if (res.resultCode==0) {
        dispatch(actionCreator(id))
        }
        dispatch(toggleFollowingInProgress(false,id))}


export const unFollowThunk = (id) => (dispatch) =>{
        let apiMethod = usersAPI.unFollowUser.bind(usersAPI)
        let actionCreator = unfollow
        followUnfollowFlow(id,dispatch,apiMethod,actionCreator)
}

export const followThunk = (id) => 
        async (dispatch) =>{
        dispatch(toggleFollowingInProgress(true,id))
        let apiMethod = usersAPI.followUser.bind(usersAPI)
        let actionCreator = follow
        let res = await usersAPI.followUser(id) 
    if (res.resultCode==0){
        dispatch(follow(id))
        }
        dispatch(toggleFollowingInProgress(false,id))}

export const follow = (userID) => ({type: FOLLOW, userID})
export const unfollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setFirstThreeUsers = (firstThreeUsers) => ({type: SET_FIRST_THREE_USERS, firstThreeUsers})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS_COUNT,totalUsers})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING,isFetching})
export const toggleFollowingInProgress = (isFetching,userID) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS,isFetching,userID})
export const setCurrentWatcingUserProfile = (currentWatcingUserProfileID) => ({type: SET_CURRENT_WATCHING_USER_PROFILE,currentWatcingUserProfileID})

export default usersReducer;