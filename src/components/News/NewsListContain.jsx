import React from "react"
import style from "./NewsList.module.css"
import News from "./News/News"
import {connect} from 'react-redux'
import getNews from "../../redux/news-reducer"

const NewsList = ({newsList}) => {
    let newsListToRender = newsList.map(newsData=><News newsDataToNewsComponent={newsData} />)
    return (
        <section>
            {newsListToRender}
        </section>
)}

let mapStateToProps = (state) => {
    return {
        newsList: state.newsPage.newsData
    }
    
}

const NewsListContain = connect(mapStateToProps,{getNews})(NewsList)

export default NewsListContain