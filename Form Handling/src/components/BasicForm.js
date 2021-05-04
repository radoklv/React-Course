import useInput from '../hooks/use-basic-form';

const BasicForm = () => {
  const {
    value: firstName,
    valueIsValid: isFirstNameValid,
    valueChangeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    classes: firstNameClasses,
    reset: resetFirstName,
  } = useInput((value) => value.length > 5);

  const {
    value: lastName,
    valueIsValid: isLastNameValid,
    valueChangeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    classes: lastNameClasses,
    reset: resetLastName,
  } = useInput((value) => value !== '');

  const {
    value: email,
    valueIsValid: isEmailValid,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    classes: emailClasses,
    reset: resetEmail,
  } = useInput((value) => value.includes('@'));

  let isFormValid = false;

  if (isFirstNameValid && isLastNameValid && isEmailValid) {
    isFormValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    console.table(newUser);

    resetFirstName();
    resetLastName();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
