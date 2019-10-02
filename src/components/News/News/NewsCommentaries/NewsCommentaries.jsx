import React from "react"
import style from "./NewsCommentaries.module.css"

const NewsCommentaries = (props) => {
  let newsCommentariesList = props.newsData.commentaries.map(commentary=>{
    return <NewsCommentary {...props}/>})
  return <div>{newsCommentariesList}</div>
  }

const NewsCommentary = (props) => {
      return (<div>
          <p>Дядя</p>
          <p className={style.newsCommentary__date}>29 июля</p>
          <p>{props.newsData.commentaries}</p>
          </div>)
}
export default NewsCommentaries