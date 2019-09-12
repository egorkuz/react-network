import React from "react"
import style from "NewsList.module.css"
import {connect} from 'react-redux'
import getNews from "../../redux/news-reducer"

const NewsList = () => {
    newsList.map(news=>)
}

let mapStateToProps = (state) => {
    return {
        newsList: state.newsPage.newsData
    }
    
}

const NewsListContain = connect(mapStateToProps,{getNews})(NewsList)

export default NewsListContain