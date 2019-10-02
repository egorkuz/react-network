import React, {useState,useEffect} from 'react'
import styles from './Status.module.css'

const Status = (props) => {
       let stateWithSetState = useState(false); //default local state value
       //let editMode = stateWithSetState[0]; //firts element of array created by useState
       //let setEditMode = stateWithSetState[1]; //second element of array is function
       let [editMode, setEditMode] = stateWithSetState
       let [status, setStatus] = useState(props.status)
       //useEffect works after page render
       //hooks dont use in if else construction and cycles
       useEffect(()=>{
       setStatus(props.status)
       },[props.status])
       const activateEditMode = () => 
       {
            setEditMode(true)
       } 
       const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
       } 
       const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
       return (
        <section className={styles.status}>
            {!editMode?
            <div>
                <span onDoubleClick={activateEditMode}>{`${props.status}`}</span>
            </div>
            :
            <div>
                <input onBlur={deactivateEditMode} onChange={onStatusChange} autoFocus={true}/>
            </div>}
        </section>)}

export default Status