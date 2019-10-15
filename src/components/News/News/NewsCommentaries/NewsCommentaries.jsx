import React from "react"
import style from "./NewsCommentaries.module.css"

const NewsCommentaries = (props) => {
  let newsCommentariesList
  if(props.newsData.commentaries){newsCommentariesList=props.newsData.commentaries.map((commentary,index)=>{
   return <NewsCommentary key={index} {...props}/>})}
 return <div>{newsCommentariesList}</div>
  }

const NewsCommentary = (props) => {
      return (<div>
          <p>Дядя</p>
          <p className={style.newsCommentary__date}>29 июля</p>
          <p>Привет</p>
          </div>)
}
export default NewsCommentaries
