import React from 'react';
import style from './Pagination.module.css';
import {useState} from 'react'

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalCount/props.pageSize)
    let pages = [];
    for (let i=1; i <=pagesCount; i++){
        pages.push(i)}
    let pagesLength = pages.length
    let numberOfParts = Math.ceil(pagesLength/props.displayingElelements)
    const[leftBorder,setLeftBorder] = useState(1)
    const[rightBorder,setRightBorder] = useState(props.displayingElelements)
    const[pagesPart,setPagesPart] = useState(1) 
    return <div className={style.pagination}>
    {pages.slice(leftBorder-1,rightBorder).map(page=><span onClick={(e)=>{props.onPageChanged(page)}} className={props.currentPage===page&&style.activePage}>{`${page} `}</span>)}
    <button onClick={()=>{setLeftBorder(rightBorder+1) 
                          setRightBorder(rightBorder+props.displayingElelements)}} className={style.button}>Далее</button>
    </div>
    }
    
export default Pagination;