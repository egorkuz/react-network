import React from "react"
import style from "./News.module.css"
import {reduxForm, Field, Form} from 'redux-form'
import {required,maxLengthCreator} from '../../../utils/validation/validation.js'
import {Textarea} from '../../../components/common/ValidationForms/ValidationForms'
import NewsCommentaries from './NewsCommentaries/NewsCommentaries'

let maxLengthCreatorValidate = maxLengthCreator(40)

const AddNewsCommentaryForm = (props) => {
    return  <Form onSubmit={props.handleSubmit} className={style.news__commentary}>
                <Field rows='8' validate={[required,maxLengthCreatorValidate]} name={"newsСommentaryText"} component={Textarea}/>
                <button className={style.button}>Комментировать</button>
            </Form>
}

const AddNewsCommentaryReduxForm = reduxForm({form: 'addNewsСommentaryForm'})(AddNewsCommentaryForm)

const News = (props) => {
    let onAddCommentary = (values) => {
        props.addCommentaryForNews(props.newsDataToNewsComponent.newsId,values.newsСommentaryText)
    }
    return (
        <div className={style.news} key={props.newsDataToNewsComponent.newsId}>
        <h3 className={style.news__name}>{props.newsDataToNewsComponent.newsName}</h3>
        <p className={style.news__date}>{props.newsDataToNewsComponent.date}</p>
        <img src={props.newsDataToNewsComponent.newsImage} alt=""/>
        <p>{props.newsDataToNewsComponent.newsText}</p>
        <NewsCommentaries newsData={props.newsDataToNewsComponent}/>
        <AddNewsCommentaryReduxForm onSubmit={onAddCommentary}/>
        </div>
    )
}

export default News