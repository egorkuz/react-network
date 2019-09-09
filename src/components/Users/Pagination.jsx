import React from 'react';
import styles from './Users.module.css';

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize) 
    let pages = [];
    for (let i=1; i <=pagesCount; i++){
        pages.push(i)}
    let pagesCountToRender = pages.map(page=>{
                return(<span onClick={(e)=>{this.onPageChanged(page)}} className={this.props.currentPage===page&&styles.activePage}>{`${page} `}</span>)
        )}
    return <div>{pagesCountToRender}</div>
    }
    
export default Pagination;