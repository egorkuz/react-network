import React from "react"
import ReactDOM from 'react-dom'
import style from "./News.module.css"
import {reduxForm, Field, Form} from 'redux-form'
import {required,maxLengthCreator} from '../../../utils/validation/validation.js'
import {Textarea} from '../../../components/common/ValidationForms/ValidationForms'
import NewsCommentaries from './NewsCommentaries/NewsCommentaries'
import {useState} from 'react'
import CommentarySign from '../../common/CommentarySign/CommentarySign'
import LikeSign from '../../common/LikeSign/LikeSign'

let maxLengthCreatorValidate = maxLengthCreator(40)

const AddNewsCommentaryForm = (props) => {
    return  <Form  onSubmit={props.handleSubmit} className={style.news__commentary}>
                <Field   rows='8' validate={[required,maxLengthCreatorValidate]} name={`news${props.newsId}СommentaryText`} component={Textarea}/>
                <button autoFocus className={style.button}>Комментировать</button>
            </Form>
}

const AddNewsCommentaryReduxForm = reduxForm({form: "addNewsCommentaryReduxForm"})(AddNewsCommentaryForm)

const News = (props) => {
    let onAddCommentary = (values) => {
        props.addCommentaryForNews(props.newsDataToNewsComponent._id,props.newsDataToNewsComponent.newsId,values[`news${props.newsDataToNewsComponent.newsId}СommentaryText`],props.userId,props.userName)
        switchToCommentaryMode(false)
    } 
    const[addCommentaryMode,switchToCommentaryMode] = useState(false)
    const[likeInProgress,setLikeInProgress]=useState(false)
    return (
        <div className={style.news} key={props.newsDataToNewsComponent.newsId}>
        <h3 className={style.news__name}>{props.newsDataToNewsComponent.newsName}</h3>
        <p className={style.news__date}>{props.newsDataToNewsComponent.date.substring(10,-10)}</p>
        <img className={style.news__hero} src={props.newsDataToNewsComponent.newsImage||"https://www.grekomania.ru/images/places/19/cyclades/santorini/big/88316_Famous-Santorini-sunset-3.jpg"} alt=""/>
        <p>{props.newsDataToNewsComponent.newsText}</p>
        <NewsCommentaries newsData={props.newsDataToNewsComponent}/>
        <div className={style.news__likeAndCommentaryPanel}>
        </div>
        {addCommentaryMode?<AddNewsCommentaryReduxForm onBlur={()=>{
        switchToCommentaryMode(false)
        }} onSubmit={onAddCommentary} newsId={props.newsDataToNewsComponent.newsId}/>:
        <section className={style.news__likeAndCommentaryPanel}>
        <CommentarySign className={style.news__likeAndCommentaryPanel__commentarySign} 
                        onClick={()=>{switchToCommentaryMode(true)}}/>
                       
        {props.newsDataToNewsComponent.usersLikes.some(user=>user==props.userId)?
        <LikeSign onClick={()=>{
            props.deleteLike(props.newsDataToNewsComponent.newsId,props.userId)}} className={style.news__likeAndCommentaryPanel__likeSign + ' ' + style.isLiked}/>:
        <LikeSign onClick={()=>{props.addLike(props.newsDataToNewsComponent.newsId,props.userId)}} className={style.news__likeAndCommentaryPanel__likeSign}/>}
        <p className={style.likeAndCommentaryPanel__likeSign}>{props.newsDataToNewsComponent.likes}</p>
        </section>
        }
        
        </div>
    )
}

export default News