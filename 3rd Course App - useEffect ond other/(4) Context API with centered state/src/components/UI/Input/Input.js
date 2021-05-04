import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef(     // For more info lection 128
  ({ label, type, id, value, isValid, onChange, onBlur }, ref) => {

    const inputRef = useRef();

    const activate = () => {
      // For more info lection 128
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      // For more info lection 128
      return {
        focus: activate,
      };
    });

    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
