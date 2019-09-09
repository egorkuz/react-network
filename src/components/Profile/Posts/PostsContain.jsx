import React from 'react';
import {addPostCreator} from '../../../redux/profile-reducer'
import Posts from './Posts'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
        return {
        addPost: (newPostTextValue) => {dispatch(addPostCreator(newPostTextValue))}
}}

const PostsContain = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContain;