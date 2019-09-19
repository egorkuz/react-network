import React,{Suspense} from 'react'
import {connect} from 'react-redux'
import Preloader from "../components/common/Preloader/Preloader"

const withSuspense = (Component) => {
 return (props)=>{
    return <Suspense fallback={<Preloader />}>
    <Component {...props}/>
    </Suspense>
 }
}

export default withSuspense