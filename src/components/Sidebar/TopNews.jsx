import React from 'react'
import style from './LatestComments.module.css'
import Commentary from './Commentary/Commentary'

const LatestComments = (props) => {
    return (<aside className={style.sidebar}>
           <Commentary />
           </aside>)
}
export default LatestComments