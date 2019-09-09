import React from 'react'
import styles from './Status.module.css'

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatusThunk(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
        <section className={styles.status}>
            {!this.state.editMode?
            <div>
                <span onDoubleClick={this.activateEditMode}>{`${this.props.status}`}</span>
            </div>
            :
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}  value={this.state.status}/>
            </div>}
        </section>)
    }
} 


export default Status