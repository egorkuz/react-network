import React from 'react';
import {addPost,deletePost,addLike,deleteLike} from '../../../redux/profile-reducer'
import Posts from './Posts'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        userName: state.auth.login,
        userId: state.auth.id 
    }
}

const PostsContain = connect(mapStateToProps, {addPost,deletePost,addLike,deleteLike})(Posts)
export default PostsContain;