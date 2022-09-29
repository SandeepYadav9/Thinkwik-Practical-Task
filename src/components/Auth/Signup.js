import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserInput from "./hooks/User-Input";
import  "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formIsValid, setFormIsValid] = useState(false);
  const {
    value: fristName,
    nameIsInValid: invalidFristName,
    onValueInputHandler: onFristNameChangeHandler,
    onErrorHandler: fristnameBlurHandler,
    nameIsValid: validFristName,
    reset: resetFristNameHandler,
  } = UserInput((value) => value.length > 0);


  const {
    value: email,
    nameIsInValid: invalidEmail,
    onValueInputHandler: onEmailChangeHandler,
    onErrorHandler: emailBlurHandler,
    nameIsValid: validEmail,
    reset: resetEmailHandler,
  } = UserInput((value) => value.includes("@gmail.com"));

  const {
    value: password,
    nameIsInValid: invalidPassword,
    onValueInputHandler: onPasswordChangeHandler,
    onErrorHandler: passwordBlurHandler,
    nameIsValid: validPassword,
    reset: resetPasswordrHandler,
  } = UserInput((value) => value.length >= 6);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validEmail && !validFristName && validPassword ) {
      return;
    } 
    navigate("/login", { replace: true }); 
    resetFristNameHandler();
    resetEmailHandler();   
    resetPasswordrHandler();
  };

  useEffect(() => {
    if (validEmail && validFristName && validPassword ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [validEmail, validFristName, validPassword]);

  return (
    <div className="signup-container">
      <h3>Create Account</h3>
      <form  onSubmit={submitHandler}>
        <div className="input-signup">
          <label htmlFor="fname">Full Name</label>
          <input          
            type="text"
            id="fname"
            placeholder="Full Name EX. Sandeep Yadav "
            value={fristName && localStorage.setItem("EMAIL", fristName)}
            onChange={onFristNameChangeHandler}
            onBlur={fristnameBlurHandler}
          />
          {invalidFristName && <p className="signup-error">Please enter a Fname</p>}
        </div>       
        <div className="input-signup">
          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            placeholder="Email Ex. sandeep@thinkwik.com"
            value={email}
            onChange={onEmailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {invalidEmail && (
            <p className="signup-error">Please enter an email address</p>
          )}
        </div>
        <div className="input-signup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="At list 6 charector Ex 123456"
            value={password}
            onChange={onPasswordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {invalidPassword && (
            <p className="signup-error">Please enter a password.</p>
          )}
        </div>
        <div className="signup-action">
          <button type="submit" disabled={!formIsValid}>
            Continue
          </button>
        </div>
      </form>
      <footer>
        <p>
          Already have an account ?<NavLink to="/login"> Login </NavLink>{" "}
          <br />
          <NavLink to="/">Back To Home</NavLink>
        </p>
      </footer>
    </div>
  );
};

export default Signup;
