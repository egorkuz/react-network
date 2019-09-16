import React from 'react';
import styles from './Users.module.css';
const Users = (props) => {
        return (
        <div className={styles.usersPage}>
        <div>{props.usersList}</div>
        </div>
        )}
export default Users;