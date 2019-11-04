import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';
import {reduxForm, Field, Form} from 'redux-form'
import {required,maxLengthCreator} from '../../../utils/validation/validation.js'
import {Textarea} from '../../../components/common/ValidationForms/ValidationForms'

let maxLengthCreatorValidate = maxLengthCreator(40)

const AddNewPostForm = (props) => {
    return  <Form onSubmit={props.handleSubmit} className={classes.newPostTextarea}>
                <Field rows='8' validate={[required,maxLengthCreatorValidate]} placeholder={props.newPostText} name={"sendNewPostTextAreaValue"} component={Textarea}/>
                <button className={classes.send} onKeyPress={(e)=>{if(e.key === 'Enter'){props.handleSubmit()}}}>Новый пост</button>
            </Form>
}

const AddNewPostReduxForm = reduxForm({form: 'addNewPostForm'})(AddNewPostForm)


const Posts = (props) => {
    let postsElements = props.postsData.map( post=> {
        return(
        <Post key={post.postId} 
        name={props.userName}
        deletePost={props.deletePost} 
        addLike={props.addLike}
        deleteLike={props.deleteLike} 
        usersLikes={post.usersLikes} 
        likes={post.likes} 
        userId={props.userId} 
        uid={post.uid} 
        postId={post.postId}
        postText={post.postText} 
        date={new Date(post.date).toLocaleString()}/>)
    })
    let onAddPost = (values) => {
        props.addPost(props.userId,values.sendNewPostTextAreaValue)
    }
    return (
    <div>
    <AddNewPostReduxForm onSubmit={onAddPost} newPostText={props.newPostText}/>
    {postsElements}
    </div>
    )}
    
    export default Posts;