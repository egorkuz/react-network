import React from 'react';
import classes from './Dialogs.module.css'
import {connect} from 'react-redux'
import ChatContain from './Chat/ChatContain';
import Names from './Names/Names'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

class Dialogs extends React.Component {
    render() {
    return(
    <div className={classes.dialogs}>
    <Names dialogsList={this.props.dialogsList} isAuth={this.props.isAuth}/>
    <ChatContain />
    </div>)
}} 
let mapStateToPropsForRedirect = (state) => {
    return {isAuth: state.auth.isAuth}
}

let mapStateToProps = (state) => {
    return {
    newMessageText: state.dialogsPage.newMessageText,
    messagesData: state.dialogsPage.messagesData,
    dialogsList: state.dialogsPage.dialogsList,
}}

export default compose(connect(mapStateToProps),connect(mapStateToPropsForRedirect),withAuthRedirect)(Dialogs) 
