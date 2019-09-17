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
    {pagesPart>1?<button onClick={()=>{setLeftBorder(leftBorder-props.displayingElelements) 
                          setRightBorder(rightBorder-props.displayingElelements)
                          setPagesPart(pagesPart-1)
                          props.onPageChanged(leftBorder+1)
                          }} className={style.button}>Назад</button>:null}
    {pages.slice(leftBorder-1,rightBorder).map(page=><span onClick={(e)=>{props.onPageChanged(page)}} className={props.currentPage===page&&style.activePage}>{`${page} `}</span>)}
    {pagesPart<numberOfParts?<button onClick={()=>{
                          setLeftBorder(rightBorder+1) 
                          setRightBorder(rightBorder+props.displayingElelements)
                          setPagesPart(pagesPart+1)
                          props.onPageChanged(rightBorder+1)
                          }} className={style.button}>Далее</button>:null}
    </div>
    }
    
export default Pagination;