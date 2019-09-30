const GET_NEWS = 'users-reducer/GET_NEWS';
const WRITE_COMMENTARY_FOR_NEWS = 'news-reducer/WRITE_COMMENTARY_FOR_NEWS'

let initialNewsPage = {

    newsData: [
        {newsId: 1, 
        newsName: "Новый особняк стоимостью 25 млн$ был построен на 25 линии СНТ Дружба",
        newsImage: "https://www.grekomania.ru/images/places/19/cyclades/santorini/big/88316_Famous-Santorini-sunset-3.jpg",
        date: "28 июля",
        newsText: "Роскошный особняк смотрится просто изумительно! Рядом с домом стоит множество суперкаров! В доме 8 спален, 5 ванных комнат. Роскошный особняк класса люкс принадлежит русскому бизнессмену!",
        commentaries: []
    },
        {newsId: 2, newsName: "Прощальный костер состоится 25 августа",
        newsImage: "https://www.grekomania.ru/images/places/19/cyclades/santorini/big/88316_Famous-Santorini-sunset-3.jpg",
        date: "28 июля",
        commentaries: []
    },
        {newsId: 3, newsName: "Дорогое шампанское будет литься рекой на прощальном костре!",
        newsImage: "https://www.grekomania.ru/images/places/19/cyclades/santorini/big/88316_Famous-Santorini-sunset-3.jpg",
        date: "28 июля",
        commentaries: []  
    },
    ],
    
}
const newsReducer = (state=initialNewsPage,action) => {
    switch(action.type) { 
        case WRITE_COMMENTARY_FOR_NEWS: 
            let newCommentary = {
            newsId: action.newsId,
            user: "Дядя",
            message: action.newCommentaryTextValue
            }
            return (
                { 
                ...state,
                newsData: [...state.newsData]
            
            }
            )
        default: {
            return state}}}


export const getNews = (news) => {
    return null
}



export default newsReducer