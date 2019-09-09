import React from 'react';
import './App.css';
import HeaderAPIComponent from "./components/Header/HeaderContain"
import NavigationContain from './components/Navigation/NavigationContain';
import DialogsContain from './components/Dialogs/DialogsContain';
import UsersContain from './components/Users/UsersContain'
import {Route} from 'react-router-dom'
import ProfileContain from './components/Profile/ProfileContain';
import LoginContain from './components/Login/LoginContain'
import {connect} from 'react-redux'
import {setAuthUserDataThunk} from './redux/auth-reducer'
import {logout} from './redux/auth-reducer'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import Preloader from './components/common/Preloader/Preloader'
import {initializedApp} from './redux/app-reducer'

class App extends React.Component{
    componentDidMount() {

      this.props.initializedApp()
  }
  render(){
  if (!this.props.initialized) {
  
    return <Preloader />
  }
  else {
  return (
    <div className="app-wrapper">
      <HeaderAPIComponent />
      <NavigationContain store={this.props.store} />
      <div className='content'>
        <Route path='/profile/:userId?' render={ ()=> <ProfileContain store={this.props.store} /> } />
        <Route path='/dialogs' render={ ()=> <DialogsContain /> } />
        <Route path='/users' render={ ()=> <UsersContain /> } />
        <Route path='/login' render={ ()=> <LoginContain/> } />
      </div>
      </div>
    )
}}}

let mapStateToProps = (state) => {
  return ({
    initialized: state.app.initialized
  })
}

export default compose(connect(mapStateToProps, {setAuthUserDataThunk,initializedApp}),withRouter)(App);