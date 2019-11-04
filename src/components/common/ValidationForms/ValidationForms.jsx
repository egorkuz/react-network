import React from 'react'
import styles from './ValidationForms.module.css'
import {Field} from 'redux-form'

    export const Textarea = ({input,meta,child,...props}) => {
    {if (meta.touched && meta.error==="Required")
    {return <div className={styles.input + ' ' + styles.input_zeroValueError}>
    <textarea {...input}{...props} />
    <span>Введите хотя бы 1 символ</span>
     </div>}
     else if (meta.touched && meta.error==="Max length error"){
    return <div className={styles.input + ' ' + styles.input_maxLengthError}>
    <textarea {...input}{...props} />
    <span>Превышено максимальное число символов</span>
     </div>
     }
    else {return <div className={styles.input}>
    <textarea {...input}{...props} />
    </div>}
    }  
}
        export const Input = ({input,meta,...props}) => {
        {if (meta.touched && meta.error==="Required")
        {return <div className={styles.input + ' ' + styles.input_zeroValueError}>
        <textarea  {...input} {...props}/>

         </div>}
         else if (meta.touched && meta.error==="Max length error"){
        return <div className={styles.input + ' ' + styles.input_maxLengthError}>
        <textarea  {...input} {...props}/>
         </div>
         }
        else {return <div className={styles.input}>
        <textarea  {...input} {...props}/>
        </div>}}}

export const CreateField = (validator,placeholder,name,component,props={},className,text="") => {
    return <div className={className}>
    <Field 
    validate={validator} 
    placeholder={placeholder} 
    name={name} 
    component={component}
    {...props}
    />{text}
    </div>
}