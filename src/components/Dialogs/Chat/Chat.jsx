import React from 'react';
import classes from './Chat.module.css'
import Message from './Message/Message'
import {reduxForm, Field, Form} from 'redux-form'
import {required,maxLengthCreator} from '../../../utils/validation/validation.js'
import {Textarea} from '../../../components/common/ValidationForms/ValidationForms'

let maxLengthCreatorValidate = maxLengthCreator(40)
const ChatForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Field rows='8' validate={[required,maxLengthCreatorValidate]} placeholder={props.newMessageText} name={"sendMessageTextAreaValue"} component={Textarea} />
            <button className={classes.send}>Отправить сообщение</button>
        </Form>
    )
}
const ChatReduxForm = reduxForm({form: "sendMessage"})(ChatForm)
const Chat = (props) => {
    let messagesList = props.messages.messagesData.map(message=>{
        return (
        <Message text={message.text} time={message.time}/>
        )
    })
    let sendNewMessage = (values) => {
        props.sendMessage(values.sendMessageTextAreaValue)
    } 
    return (<section className={classes.chat}>
                {messagesList}
                <div>
                <ChatReduxForm onSubmit={sendNewMessage} newMessageText={props.messages.newMessageText}/>
                </div>
            </section>)
}


export default Chat;