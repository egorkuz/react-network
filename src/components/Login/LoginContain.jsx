import React from 'react'
import style from './Login.module.css'
import {reduxForm, Field, Form} from 'redux-form'
import {Input} from '../common/ValidationForms/ValidationForms'
import {required,maxLengthCreator} from '../../utils/validation/validation'
import {connect} from 'react-redux'
import {login} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'

const LoginForm = (props) => {
        return (
            <Form className={style.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder={'Логин'} name={"email"} component={Input}/> 
            </div>
            <div>
                <Field validate={[required]} placeholder={'Пароль'} name={"password"} type={"password"} component={Input}/> 
            </div>
            <div>
                <Field validate={[required]} type={'checkbox'} name={'rememberMe'} component={'input'}/>Запомнить
            </div>
            <div>
                <button type='submit'>Войти</button>
            </div>
            {props.captchaUrl!=null?<img src={props.captchaUrl}/>:null}
            {props.captchaUrl&& <div>
                <Field validate={[required,maxLengthCreatorValidate]} type={'input'} name={'captcha'} component={'input'}/>Введите символы
            </div>}
            {props.error&&<span>{`${props.error}`}</span>}
        </Form>
        )
    }

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

class LoginContain extends React.Component {
    onSubmit = (formData) => {
        this.props.login(formData.email,formData.password,formData.rememberMe,formData.captcha)
    }
    render(){
        return(this.props.isAuth?
            <Redirect to="/profile" />
            :
        <section>
            <h1 className={style.login__name}>Авторизация</h1>
            <LoginReduxForm captchaUrl={this.props.captchaUrl} onSubmit={this.onSubmit}/>
            <p className={style.notLogined}>Вы не залогинены</p>
        </section>)
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps,{login})(LoginContain)