import React from "react"
import style from "./NewsCommentaries.module.css"
import Preloader from '../../../common/Preloader/Preloader'

const NewsCommentaries = (props) => {
 
  if(!props.newsData.commentaries){return <Preloader/ >}
  let newsCommentariesList = props.newsData.commentaries.map((commentary,index)=>{
  return <NewsCommentary key={index} newsId={props.newsData.newsId} deleteCommentaryForNews={props.deleteCommentaryForNews} commentary={commentary} userId={props.userId}/>})
 return <div>
      <h4 className={style.commentariesName}>{`Комментарии: ${props.newsData.commentaries.length}`}</h4>
      <div className={style.newsCommentariesList}>{newsCommentariesList}</div>
   </div>
  }

const NewsCommentary = (props) => {
      return (<div className={style.newsCommentary}>
          <p>{props.commentary.userName}</p>
          <p className={style.newsCommentary__date}>{new Date(props.commentary.date).toLocaleString()}</p>
          <p className={style.newsCommentary__text}>{props.commentary.commentaryText}</p>
          {props.commentary.userId===props.userId?<button type="submit" onClick={()=>props.deleteCommentaryForNews(props.newsId,props.commentary._id)}>Удалить</button>:null}
          </div>)
}
export default NewsCommentaries
