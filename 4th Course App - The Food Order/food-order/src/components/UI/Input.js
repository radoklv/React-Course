import React from 'react';
import classes from './Input.module.css';
 
 const Input = React.forwardRef(({lebel, input}, ref) => {
     return (
         <div className={classes.input}>
             <label htmlFor={input.id}>{lebel}</label>
             <input ref={ref} {...input}/>
         </div>
     )
 });
 
 export default Input
 