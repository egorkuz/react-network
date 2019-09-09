import React from 'react';
import {connect} from 'react-redux'
import Header from './Header'
import {setAuthUserDataThunk} from '../../redux/auth-reducer'
import {logout} from '../../redux/auth-reducer'
import withAuthRedirect from '../../hoc/withAuthRedirect'

class HeaderAPIComponent extends React.Component {

render() {
        return (<Header {...this.props}/>)
}}
let mapStateToProps = (state) => {
        return(
        {userData: state.auth}
        )
}
let HeaderContain = connect(mapStateToProps, {setAuthUserDataThunk,logout})(HeaderAPIComponent)
export default HeaderContain;