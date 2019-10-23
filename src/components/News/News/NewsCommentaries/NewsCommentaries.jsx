import React from "react"
import style from "./NewsCommentaries.module.css"
import Preloader from '../../../common/Preloader/Preloader'
import {useEffect} from 'react'

const NewsCommentaries = (props) => {
 
  if(!props.newsData.commentaries){return <Preloader/ >}
  let newsCommentariesList = props.newsData.commentaries.map((commentary,index)=>{
    return <NewsCommentary key={index} commentaryText={commentary.commentaryText}/>})
 return <div>{newsCommentariesList}</div>
  }

const NewsCommentary = (props) => {
      return (<div>
          <p>Дядя</p>
          <p className={style.newsCommentary__date}>29 июля</p>
          <p>{props.commentaryText}</p>
          </div>)
}
export default NewsCommentaries
