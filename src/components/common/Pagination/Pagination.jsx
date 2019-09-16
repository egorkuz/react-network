import React from 'react';
import style from './Pagination.module.css';
import {useState} from 'react'

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalCount/props.pageSize)
    let pages = [];
    for (let i=1; i <=pagesCount; i++){
        pages.push(i)}
    //let pagesFirstPart = pages.slice(0,props.displayingElelements)
    return <div className={style.pagination}>
    {pages.map(page=><span onClick={(e)=>{props.onPageChanged(page)}} className={props.currentPage===page&&style.activePage}>{`${page} `}</span>)}
    <button className={style.button}>Далее</button>
    </div>
    }
    
export default Pagination;