import React from 'react';
import {withRouter} from 'react-router-dom'
import Profile from './Profile'
import {setUserProfile} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import {setUserProfileThunk} from '../../redux/profile-reducer'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {getUserStatusThunk,updateStatusThunk} from '../../redux/profile-reducer'

class ProfileContain extends React.Component {
    componentDidMount() {
            let userId = this.props.match.params.userId
            if (!userId) {
                userId=this.props.autorizedUserId
                if(!userId) {
                    this.props.history.push('/login')
                }
            }
            this.props.setUserProfileThunk(userId)
            this.props.getUserStatusThunk(userId)
    }
    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    })

export default compose(connect(mapStateToProps,{setUserProfile,getUserStatusThunk,updateStatusThunk,setUserProfileThunk}),withRouter,withAuthRedirect)(ProfileContain);