import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isNotEmpty = (value) => value.trim() !== '';
const isFourChar = (value) => value.trim().length === 4;

const Checkout = ({ onCancel, onConfirm }) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true
  })

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostal = postalCodeInputRef.current.value;

    const isEnteredNameValid = isNotEmpty(enteredName);
    const isEnteredStreetValid = isNotEmpty(enteredStreet);
    const isEnteredCityValid = isNotEmpty(enteredCity);
    const isEnteredPostalValid = isFourChar(enteredPostal);

    setFormValidity({
      name: isEnteredNameValid,
      street: isEnteredStreetValid,
      city: isEnteredCityValid,
      postalCode: isEnteredPostalValid
    });

    const isFormValid =
      isEnteredNameValid &&
      isEnteredStreetValid &&
      isEnteredPostalValid &&
      isEnteredCityValid;

    if(!isFormValid){
      return
    }

    const userData = {
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostal
    }

    onConfirm(userData);
  };

  const inputClasses = (input) =>{
    return `${classes.control} ${formValidity[input] ? '': classes.invalid}`
  }

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={inputClasses('name')}>
        <label htmlFor="name">Your Name</label>
        <input htmlFor="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={inputClasses('street')}>
        <label htmlFor="street">Street</label>
        <input htmlFor="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={inputClasses('postalCode')}>
        <label htmlFor="postal">Postal Code</label>
        <input htmlFor="text" id="postal" ref={postalCodeInputRef} />
        {!formValidity.postalCode && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={inputClasses('city')}>
        <label htmlFor="city">City</label>
        <input htmlFor="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit} type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
