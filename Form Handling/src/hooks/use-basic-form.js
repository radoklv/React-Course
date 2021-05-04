import { useState } from 'react';

const useInput = (validateLogicCallback) => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateLogicCallback(inputValue);
  const inputIsInvalid = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setInputValue(e.target.value.trim());
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setInputValue('');
    setIsTouched(false);
  };

  const inputClasses = inputIsInvalid
  ? 'form-control invalid'
  : 'form-control';

  return {
    value: inputValue,
    valueIsValid: valueIsValid,
    valueChangeHandler,
    blurHandler,
    classes: inputClasses,
    reset,
  };
};

export default useInput;
