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

/*{newsId: 1, 
    newsName: "Новый особняк стоимостью 25 млн$ был построен на 25 линии СНТ Дружба",
    newsImage: "https://www.grekomania.ru/images/places/19/cyclades/santorini/big/88316_Famous-Santorini-sunset-3.jpg",
    date: "28 июля",
    newsText: "Роскошный особняк смотрится просто изумительно! Рядом с домом стоит множество суперкаров! В доме 8 спален, 5 ванных комнат. Роскошный особняк класса люкс принадлежит русскому бизнессмену!",
    commentaries: []
},
    {newsId: 2, newsName: "Прощальный костер состоится 25 августа",
    newsImage: "https://www.grekomania.ru/images/places/19/cyclades/santorini/big/88316_Famous-Santorini-sunset-3.jpg",
    date: "28 июля",
    newsText: "Будет очень весело! Приедут лучшие диджеи мира. Дом переньон и Хенеси икс о за счёт садоводства",
    commentaries: []
},
    {newsId: 3, newsName: "Дорогое шампанское будет литься рекой на прощальном костре!",
    newsImage: "https://www.grekomania.ru/images/places/19/cyclades/santorini/big/88316_Famous-Santorini-sunset-3.jpg",
    date: "28 июля",
    newsText: "Будет очень весело! Приедут лучшие диджеи мира. Дом переньон и Хенеси икс о за счёт садоводства",
    commentaries: []  
},*/