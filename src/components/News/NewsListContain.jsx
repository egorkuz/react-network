import React from "react"
import style from "./NewsList.module.css"
import {useEffect} from 'react'
import News from "./News/News"
import {connect} from 'react-redux'
import {getNewsData,addCommentaryForNews,addLike} from '../../redux/news-reducer'
import Preloader from "../common/Preloader/Preloader"

const NewsList = ({newsList,userId,userName,getNewsData,addCommentaryForNews,addLike}) => {
    useEffect(()=>{
        getNewsData()
    },[])
     if(!newsList){return <Preloader />}
     let newsListToRender = newsList.map(newsData=><News userId={userId} userName={userName} addCommentaryForNews={addCommentaryForNews} addLike={addLike} newsDataToNewsComponent={newsData} />)
     return (
        <section>
            {newsListToRender}
        </section>
)}

let mapStateToProps = (state) => {
    return {
        newsList: state.newsPage.newsData,
        userId: state.auth.id,
        userName: state.auth.login
    }
    
}
const NewsListContain = connect(mapStateToProps,{addCommentaryForNews,getNewsData,addLike})(NewsList)

export default NewsListContain