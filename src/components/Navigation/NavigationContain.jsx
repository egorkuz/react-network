import React from 'react';
import Navigation from './Navigation'
import {connect} from 'react-redux'
import getFirstThreeUsers from '../../redux/users-reducer'

let mapStateToProps = (state) => {
    return {bestFriends: state.usersPage.firstThreeUsers}
}
const NavigationContain = connect(mapStateToProps,{getFirstThreeUsers})(Navigation)
export default NavigationContain;