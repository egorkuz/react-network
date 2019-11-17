import React from 'react';
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {

return (<header className={styles.header}>
        <p className={styles.header__name}>UNKNOW UNTITLED SOCIAL NETWORK</p>
        {props.userData.isAuth?
        <div className={styles.header__logined}>
        <span className={styles.header__welcome}>Welcome, {props.userData.login}</span><button onClick={props.logout} className={styles.button_logout}>Выйти</button>
        </div>:
        <NavLink to={'/login'}>Войти</NavLink>}
        
        </header>)}
export default Header;