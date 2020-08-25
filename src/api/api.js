import * as axios from 'axios'

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY":"1afd68a5-f7c3-4ea6-991c-7d8bc0501e73"
        }
    }
)
const heroku = axios.create({
    baseURL: "https://expressrestapi.herokuapp.com/",
})
export const usersAPI = {
    getUsers(currentPage=1,pageSize=1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res=>
            res.data)
    
    },
    getFirstThreeUsers() {
        return instance.get(`users?page=1&count=3`).then(res=>{
            return res.data})
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(res=>res.data)
    },
    unFollowUser(id) {
        return instance.delete(`follow/${id}`).then(res=>res.data)
    },
    getUserProfile(id) {
        console.warn('Use new method getProfile')
        return profileAPI.getProfile(id)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{
            status: status
        })
    },
    uploadPhoto(imageFile){
        const formData = new FormData()
        formData.append("image",imageFile)
        return instance.put(`profile/photo`,formData,{
            header: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfileChanges(profile) {
        return instance.put(`profile`,
            profile
        )
    },
    getPosts(userId) {
        return heroku.get(`/posts/${userId}`,)
    },
    savePost(userId,postText) {
        return heroku.post(`/posts`,{uid: userId,postText: postText})
    },
    deletePost(postId) {
        return heroku.delete(`/posts`,{data: {"postId": postId}})
    },
    getOnePost(userId,postId){
        return heroku.get(`/posts/${userId}/${postId}`)
    },
    updatePost(postId,newPostText) {
        return heroku.patch(`/posts/${postId}`,{newPostText: newPostText})
    },
    addLike(postId,userId) {
        return heroku.patch(`posts/${postId}/likes`,{uid: userId})},
    deleteLike(postId,userId){
        return heroku.delete(`posts/${postId}/likes`,{data: {"uid": userId}})}
}

export const authAPI = {
        authMe() {
        return instance.get(`auth/me`).then(res=>res.data)
        },
        login(email,password,rememberMe = false,captcha=null) {
        return instance.post(`auth/login`,{email,password,rememberMe,captcha}).then(res=>res.data) 
        },
        logout() {
        return instance.delete(`auth/login`).then(res=>res.data) 
        }
}
export const authenticationAPI = {
    authMe() {
    return heroku.get(`auth/me`)
    },
    login(email,password) {
    return heroku.post(`user/login`,{email,password})
    }
}
export const securityAPI = {
    getCapchaUrl() {
        return instance.get(`security/get-captcha-url`).then(res=>res.data)
}}

export const newsAPI = {
    getNewsData(newsCount=3) {
        return heroku.get(`news?count=${newsCount}`).then(res=>res.data)
    },
    postCommentary(newsId,commentaryText,userName,userId) {
        return heroku.patch(`news/${newsId}/commentaries`,{commentaryText,userName,userId})
    },
    deleteCommentary(newsId,_id) {
        return heroku.delete(`news/${newsId}/commentaries`,{data: {"_id": _id}})
    },
    addLike(newsId,userId) {
        return heroku.patch(`news/${newsId}/likes`,{userId})
    },
    deleteLike(newsId,userId) {
        return heroku.delete(`news/${newsId}/likes`,{data: {"userId": userId}})
    }
}
export default usersAPI