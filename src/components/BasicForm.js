import UserInput from "../Hooks/user-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameInputHaserror,
    isValid: enteredFirstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameInputHaserror,
    isValid: enteredLastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHaserror,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = UserInput((value) => value.includes("@"));

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHaserror
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHaserror
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHaserror
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHaserror && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHaserror && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHaserror && (
          <p className="error-text">Please enter valid Email Id.</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
