import React from 'react';
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {compose} from 'redux'

const Header = (props) => {

return (<header className={styles.header}>
        {props.userData.isAuth?
        <div><span>{props.userData.login}</span><button onClick={props.logout} className={styles.button_logout}>Выйти</button></div>:
        <NavLink to={'/login'}>Войти</NavLink>}
        </header>)}
export default Header;