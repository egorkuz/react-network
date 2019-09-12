const GET_NEWS = 'users-reducer/GET_NEWS';

let initialNewsPage = {

    newsData: [
        {id: 1, newsText: "Новый особняк стоимостью 25 млн$ был построен на 25 линии СНТ Дружба"},
        {id: 2, message: "Прощальный костер состоится 25 августа"},
        {id: 3, message: "Дорогое шампанское будет литься рекой на прощальном костре!"},
    ],
}
const newsReducer = (state=initialNewsPage,action) => {
    switch(action.type) { 
        case GET_NEWS: 
            return ({
                news: action.news,
                ...state,
            })
        default: {
            return state}}}


export const getNews = (news) => {
    return null
}

export default newsReducer