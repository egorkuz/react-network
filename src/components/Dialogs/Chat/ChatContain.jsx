import React from 'react';
import {sendMessageCreator} from './../../../redux/dialogs-reducer';
import Chat from './Chat';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {dispatch(sendMessageCreator(newMessage))}
        }
    }
const ChatContain = connect(mapStateToProps,mapDispatchToProps)(Chat) 
export default ChatContain;