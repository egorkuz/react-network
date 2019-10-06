import React from 'react';
import style from './ConfirmNavigationModal.module.css';

const ConfirmNavigationModal = ({onConfirm,onCancel}) => {
    return (<div className={style.confirmNavigationModalWrap}>
        <div className={style.confirmNavigationModal}>
        <div className={style.confirmNavigationModal__inner}>
        <p className={style.confirmNavigationModal.message}>"Вы уверены, что хотите покинуть страницу?"</p>
        <button onClick={onConfirm}>Да</button>
        </div>
        </div>
         </div>)
}

export default ConfirmNavigationModal;
