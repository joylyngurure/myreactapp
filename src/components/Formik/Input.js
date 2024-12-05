
 import React from 'react'
 import { ErrorMessage, Field } from "formik";

 

const Input =(props)=> {
  const { name, label, ...rest } = props
  return (
    <div className="text-xl">
    <div><span></span><label htmlFor={name} className='text-medium font-medium'> {label}</label></div>
      <Field name={name} {...rest}/>
       <div className='text-red-500 text-sm text-md text-left'><ErrorMessage name={name}/></div>
      
     
      
    </div>
  )
}
export default Input;
 


 