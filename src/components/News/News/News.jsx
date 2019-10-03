import React from "react"
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
                <Field  autoFocus rows='8' validate={[required,maxLengthCreatorValidate]} name={`news${props.newsId}СommentaryText`} component={Textarea}/>
                <button className={style.button}>Комментировать</button>
            </Form>
}

const AddNewsCommentaryReduxForm = reduxForm({form: "addNewsCommentaryReduxForm"})(AddNewsCommentaryForm)

const News = (props) => {
    
    let onAddCommentary = (values) => {
        props.addCommentaryForNews(props.newsDataToNewsComponent.newsId,values[`news${props.newsDataToNewsComponent.newsId}СommentaryText`])
        switchToCommentaryMode(false)
    } 
    const[addCommentaryMode,switchToCommentaryMode] = useState(false)
    console.log(addCommentaryMode)
    return (
        <div className={style.news} key={props.newsDataToNewsComponent.newsId}>
        <h3 className={style.news__name}>{props.newsDataToNewsComponent.newsName}</h3>
        <p className={style.news__date}>{props.newsDataToNewsComponent.date}</p>
        <img src={props.newsDataToNewsComponent.newsImage} alt=""/>
        <p>{props.newsDataToNewsComponent.newsText}</p>
        <NewsCommentaries newsData={props.newsDataToNewsComponent}/>
        <div className={style.news__likeAndCommentaryPanel}>
        </div>
        {addCommentaryMode?<AddNewsCommentaryReduxForm onBlur={()=>{
        switchToCommentaryMode(false)
        }} onSubmit={onAddCommentary} newsId={props.newsDataToNewsComponent.newsId}/>:
        <CommentarySign className={style.news__likeAndCommentaryPanel__commentarySign} onClick={()=>{switchToCommentaryMode(true)}}/>
        }
        </div>
    )
}
export default News