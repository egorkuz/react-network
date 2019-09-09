import React from 'react';
import styles from './Preloader.module.css';
import load from '../../../assets/images/load.gif'

const Preloader = (props) => {
    return (<img className={styles.preloader} src={load} />)
}

export default Preloader;
