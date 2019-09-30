import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';
import {reduxForm, Field, Form} from 'redux-form'
import {required,maxLengthCreator} from '../../../utils/validation/validation.js'
import {Textarea} from '../../../components/common/ValidationForms/ValidationForms'

let maxLengthCreatorValidate = maxLengthCreator(40)

const AddNewPostForm = (props) => {
    return  <Form onSubmit={props.handleSubmit} className={classes.newPostTextarea}>
                <Field rows='8' validate={[required,maxLengthCreatorValidate]} className={classes.posts__textarea} placeholder={props.newPostText} name={"sendNewPostTextAreaValue"} component={Textarea}/>

                <button className={classes.send}>Новый пост</button>
            </Form>
}

const AddNewPostReduxForm = reduxForm({form: 'addNewPostForm'})(AddNewPostForm)


const Posts = (props) => {
    let postsElements = props.postsData.map( post=> {
        return(
        <Post name={props.userName} message={post.message} />)
    })
    let onAddPost = (values) => {
        props.addPost(values.sendNewPostTextAreaValue)
    }
    return (
    <div>
    <AddNewPostReduxForm onSubmit={onAddPost} newPostText={props.newPostText}/>
    {postsElements}
    </div>
    )}
    
    export default Posts;