import React from 'react';
import Navigation from './Navigation'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {bestFriends: state.dialogsPage.dialogsList}
}
const NavigationContain = connect(mapStateToProps)(Navigation)
export default NavigationContain;