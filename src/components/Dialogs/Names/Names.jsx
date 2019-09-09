import React from 'react';
import classes from './Names.module.css';
import Name from './Name/Name'

const Names = (props) => {
    let contacts = props.dialogsList.map (
        person => <Name name={person.name} />
    )
    return (
    <div className={classes.names}>
        {contacts}
    </div>
    )}

export default Names;