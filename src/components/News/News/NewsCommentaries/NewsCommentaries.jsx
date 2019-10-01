import React from "react"
import style from "./NewsCommentaries.module.css"



const NewsCommentaries = (props) => {
  let newsCommentariesList = props.newsData.commentaries.map(commentary=>{
    return <NewsCommentary />})
  return <div>{newsCommentariesList}</div>
  }

const NewsCommentary = (props) => {
      return (<div>
          <p>Дядя</p>
          <p>29 июля</p>
          </div>)
}
export default NewsCommentaries