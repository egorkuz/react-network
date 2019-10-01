import React from "react"
import style from "./NewsList.module.css"
import News from "./News/News"
import {connect} from 'react-redux'
import {addCommentaryForNews} from '../../redux/news-reducer'

const NewsList = ({newsList,addCommentaryForNews}) => {
    let newsListToRender = newsList.map(newsData=><News addCommentaryForNews={addCommentaryForNews} newsDataToNewsComponent={newsData} />)
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
const NewsListContain = connect(mapStateToProps,{addCommentaryForNews})(NewsList)

export default NewsListContain