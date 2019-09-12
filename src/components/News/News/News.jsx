import React from "react"
import style from "./News.module.css"

const News = (props) => {
    return (
        <div className={style.news}>
        <p>{props.newsDataToNewsComponent.newsText}</p>
        <img src={props.newsDataToNewsComponent.newsImage} alt=""/>
        <p>{props.newsDataToNewsComponent.date}</p>
        </div>
    )
}

export default News