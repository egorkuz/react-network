import React from 'react'
import {reduxForm, Field, Form} from 'redux-form'
import {Input} from '../common/ValidationForms/ValidationForms'
import {required,maxLengthCreator} from '../../utils/validation/validation'
import {connect} from 'react-redux'
import {login} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'

let maxLengthCreatorValidate = maxLengthCreator(40)

const LoginForm = (handleSubmit,error) => {
        return (
            <Form onSubmit={handleSubmit}>
            <div>
                <Field validate={[required,maxLengthCreatorValidate]} placeholder={'login'} name={"email"} component={Input}/> 
            </div>
            <div>
                <Field validate={[required,maxLengthCreatorValidate]} placeholder={'password'} name={"password"} type={"password"} component={Input}/> 
            </div>
            <div>
                <Field validate={[required,maxLengthCreatorValidate]} type={'checkbox'} name={'rememberMe'} component={'input'}/>Remember me
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
            {error&&<span>{`${error}`}</span>}
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
            <h1>Login</h1>
            <LoginReduxForm onSubmit={this.onSubmit}/>
            <p>Вы не залогинены</p>
        </section>)
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(LoginContain)