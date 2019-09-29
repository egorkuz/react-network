import React from 'react'
import style from './Login.module.css'
import {reduxForm, Field, Form} from 'redux-form'
import {Input} from '../common/ValidationForms/ValidationForms'
import {required,maxLengthCreator} from '../../utils/validation/validation'
import {connect} from 'react-redux'
import {login} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'

let maxLengthCreatorValidate = maxLengthCreator(40)

const LoginForm = (handleSubmit,error) => {
        return (
            <Form className={style.loginForm} onSubmit={handleSubmit}>
            <div>
                <Field validate={[required,maxLengthCreatorValidate]} placeholder={'Логин'} name={"email"} component={Input}/> 
            </div>
            <div>
                <Field validate={[required,maxLengthCreatorValidate]} placeholder={'Пароль'} name={"password"} type={"password"} component={Input}/> 
            </div>
            <div>
                <Field validate={[required,maxLengthCreatorValidate]} type={'checkbox'} name={'rememberMe'} component={'input'}/>Запомнить
            </div>
            <div>
                <button type='submit'>Войти</button>
            </div>
            {Object.keys(error).length != 0 && error&&<span>{`${error}`}</span>}
        </Form>
        )
    }

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

class LoginContain extends React.Component {
    onSubmit = (formData) => {
        this.props.login(formData.email,formData.password,formData.rememberMe)
    }
    render(){
        return(this.props.isAuth?
            <Redirect to="/profile" />
            :
        <section>
            <h1 className={style.login__name}>Авторизация</h1>
            <LoginReduxForm onSubmit={this.onSubmit}/>
            <p className={style.notLogined}>Вы не залогинены</p>
        </section>)
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(LoginContain)