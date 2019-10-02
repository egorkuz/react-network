import React from 'react';
import {withRouter} from 'react-router-dom'
import Profile from './Profile'
import {setUserProfile} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import {setUserProfileThunk} from '../../redux/profile-reducer'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {getUserStatusThunk,updateStatusThunk,uploadPhoto,saveProfileChanges} from '../../redux/profile-reducer'

class ProfileContain extends React.Component {
    profileRender() {
        let userId=this.props.match.params.userId
            if (!userId) {
                userId=this.props.autorizedUserId
                if(!userId) {
                    this.props.history.push('/login')
                }
            }
            this.props.setUserProfileThunk(userId)
            this.props.getUserStatusThunk(userId)
    }
    componentDidMount() {
        this.profileRender()
            
    }
    componentDidUpdate(prevProps,prevState) {
        if(this.props.match.params.userId!==prevProps.match.params.userId)
        this.profileRender()
    }
    render() {
        return <Profile 
        setUserProfileThunk={this.props.setUserProfileThunk} 
        userId={this.props.match.params.userId} 
        profile={this.props.profile} status={this.props.status} 
        updateStatusThunk={this.props.updateStatusThunk} 
        currentProfile={this.props.currentProfile} 
        autorizedUserId={this.props.autorizedUserId} 
        autorizedUserProfile={!this.props.match.params.userId}
        uploadPhoto={this.props.uploadPhoto}
        saveProfileChanges={this.props.saveProfileChanges}/>
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    currentProfile: state.usersPage.currentProfile
    })

export default compose(connect(mapStateToProps,{setUserProfile,getUserStatusThunk,updateStatusThunk,setUserProfileThunk,uploadPhoto,saveProfileChanges}),withRouter,withAuthRedirect)(ProfileContain);