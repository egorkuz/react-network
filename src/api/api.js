import * as axios from 'axios'

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY":"21610f45-f41d-4a91-be29-53d5519c640e"
        }
    }
)
export const usersAPI = {
    getHeader(currentPage=1,pageSize=1) {
        return instance.head(`users?page=${currentPage}&count=${pageSize}`).then(res=>
            res)
    
    },
    getUsers(currentPage=1,pageSize=1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res=>
            res.data)
    
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
    }
}

export const authAPI = {
        authMe() {
        return instance.get(`auth/me`).then(res=>res.data)
        },
        login(email,password,rememberMe = false) {
        return instance.post(`auth/login`,{email,password,rememberMe}).then(res=>res.data) 
        },
        logout() {
        return instance.delete(`auth/login`).then(res=>res.data) 
        }
}
export default usersAPI