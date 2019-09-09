import React from 'react';
import classes from './Name.module.css'
import {NavLink} from 'react-router-dom'

const Name = (props) => {

    let name = props.name
    name = name.replace(/\s/g, '')
    return (
            <NavLink activeClassName={classes.active} to={"/dialogs/"+name}>
            {props.name}
            </NavLink>
            
    )
}

export default Name;