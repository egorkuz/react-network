const GET_NEWS = 'users-reducer/GET_NEWS';

let initialNewsPage = {

    newsData: [
        {id: 1, 
        newsText: "Новый особняк стоимостью 25 млн$ был построен на 25 линии СНТ Дружба",
        newsImage: "https://www.grekomania.ru/images/places/19/cyclades/santorini/big/88316_Famous-Santorini-sunset-3.jpg",
        date: "28 июля"
    },
        {id: 2, newsText: "Прощальный костер состоится 25 августа",
        newsImage: "https://www.grekomania.ru/images/places/19/cyclades/santorini/big/88316_Famous-Santorini-sunset-3.jpg",
        date: "28 июля"
    },
        {id: 3, newsText: "Дорогое шампанское будет литься рекой на прощальном костре!",
        newsImage: "https://www.grekomania.ru/images/places/19/cyclades/santorini/big/88316_Famous-Santorini-sunset-3.jpg",
        date: "28 июля"   
    },
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