import {newsAPI} from '../api/api'

const ADD_COMMENTARY_FOR_NEWS = 'news-reducer/WRITE_COMMENTARY_FOR_NEWS'
const GET_NEWS_DATA_SUCESS = 'news-reducer/GET_NEWS_DATA_SUCESS'
const UPDATE_NEWS_COMMENTARIES = 'news-reducer/UPDATE_NEWS_COMMENTARIES'

let initialNewsPage = {
    newsData: []
}

const newsReducer = (state=initialNewsPage,action) => {
    switch(action.type) { 
        case GET_NEWS_DATA_SUCESS: {
            return ({
                ...state,
                newsData: action.newsData
            })
        }

        case UPDATE_NEWS_COMMENTARIES: {
            const commentedNewsId = action.newsData._id
            const commentedNews = state.newsData.filter(news=>news._id==commentedNewsId)
            return ({
                ...state,
                newsData: commentedNews
            })
        }
        default: {
            return state}}}

export const getNewsDataSucess = (newsData) => ({type: GET_NEWS_DATA_SUCESS,newsData})
export const updateNewsCommentaries = (newsData) => ({type: UPDATE_NEWS_COMMENTARIES,newsData})

export const getNewsData = (newsCount) => async (dispatch) => {
            let data = await newsAPI.getNewsData(newsCount)
            dispatch(getNewsDataSucess(data))
}
export const addCommentaryForNews = (newsId,commentaryText,userName,userId) => async (dispatch) => {
            let res = await newsAPI.postCommentary(newsId,commentaryText,userName,userId)
            if(res.status===200) {
            let data = await newsAPI.getNewsData()
            dispatch(getNewsDataSucess(data))
            }
}

export const deleteCommentaryForNews = (newsId,commentaryId) => async (dispatch) => {
    let res = await newsAPI.deleteCommentary(newsId,commentaryId)
    if(res.status===200) {
    let data = await newsAPI.getNewsData()
    dispatch(getNewsDataSucess(data))
    }
}

export const addLike = (newsId,userId) => async (dispatch) => {
    let res = await newsAPI.addLike(newsId,userId)
    console.log(res)
    if(res.status===200&&res.data!=null) {
    let data = await newsAPI.getNewsData()
    dispatch(getNewsDataSucess(data))
    }
}

export const deleteLike = (newsId,userId) => async (dispatch) => {
    let res = await newsAPI.deleteLike(newsId,userId)
    if(res.status===200&&res.data!=null) {
    let data = await newsAPI.getNewsData()
    dispatch(getNewsDataSucess(data))
    }
}

export default newsReducer
