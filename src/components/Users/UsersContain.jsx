import React from 'react';
import {follow, unfollow, setCurrentPage,toggleFollowingInProgress,getUsers,followThunk,unFollowThunk} from './../../redux/users-reducer'
import {connect} from 'react-redux'
import Users from './Users'
import User from './User/User';
import Preloader from '../common/Preloader/Preloader'
import Pagination from '../common/Pagination/Pagination'
import {getAllUsers,getPageSize,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress} from '../../redux/users-selectors'


class UsersAPIComponent extends React.Component {
  
        componentDidMount() {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)}
        onPageChanged = (page) => {
            this.props.setCurrentPage(page)
            this.props.getUsers(page, this.props.pageSize)
        }
        render() {
            let usersList = this.props.users.map(
                user=>{
                return (<User userData={user} toggleFollowingInProgress={this.props.toggleFollowingInProgress} followingInProgress={this.props.followingInProgress} followThunk={this.props.followThunk} unFollowThunk={this.props.unFollowThunk} follow={this.props.follow} unfollow={this.props.unfollow}/>)})
                
            return(<>
            {this.props.isFetching?<Preloader />:null} 
            <Pagination totalCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} displayingElelements={this.props.displayingUsers}/>
            <Users usersList={usersList}/>
                </>
            )
        }}

let mapStateToProps = (state) => {
    return { 
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        displayingUsers: state.usersPage.displayingUsers
}}

const UsersContain = connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, 
    toggleFollowingInProgress, getUsers,
    followThunk, unFollowThunk})(UsersAPIComponent)

export default UsersContain;

/*let mapDispatchToProps = (dispatch) => {
        return {
        follow: (userID) => {dispatch(followAC(userID))},
        unfollow: (userID) => {dispatch(unfollowAC(userID))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (page) => {dispatch(setCurrentPageAC(page))},
        setTotalUsers: (totalUsers) => {dispatch(setTotalUsersAC(totalUsers))},
        setIsFetching: (isFetching)=>{dispatch(setIsFetchingAC(isFetching))}
}}*/
  /*this.props.setIsFetching(true)    
            getUsersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data=>{
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            data.totalCount>100?this.props.setTotalUsers(55):this.props.setTotalUsers(data.totalCount)})*/
    /*
            this.props.setIsFetching(true) 
                getUsersAPI.getUsers(page,this.props.pageSize).then(
                    data=>{
                        this.props.setIsFetching(false)
                        this.props.setUsers(data.items)  
                    }
                )*/