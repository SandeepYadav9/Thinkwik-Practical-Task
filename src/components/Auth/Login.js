import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserInput from "./hooks/User-Input";
import  "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => { 
  const navigate = useNavigate();
  const [formIsValid, setFormIsValid] = useState(false);


  const {
    value: email,
    nameIsInValid: invalidEmail,
    onValueInputHandler: onEmailChangeHandler,
    onErrorHandler: emailBlurHandler,
    nameIsValid: validEmail,
    reset: resetEmailHandler,
  } = UserInput((value) => value.trim() !== " ");

  const {
    value: password,
    nameIsInValid: invalidPassword,
    onValueInputHandler: onPasswordChangeHandler,
    onErrorHandler: passwordBlurHandler,
    nameIsValid: validPassword,
    reset: resetPasswordrHandler,
  } = UserInput((value) => value.length >= 6);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validEmail && !validPassword) {
      return;
    }      
    navigate("/", { replace: true });
    resetEmailHandler();
    resetPasswordrHandler();
  };

  const logoutHandler = () => {
    if (!validEmail && !validPassword) {
      return;
    }
    localStorage.setItem("USERNAME", null);
    localStorage.setItem("TOKEN", null);
   
  };

  useEffect(() => {
    if (validEmail && validPassword) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [validEmail, validPassword]);

 
  return (
    <div className="login-container">
      <h3 className="login-title">Sign-In</h3>
      <form action="" onSubmit={onSubmitHandler}>
        <div className="login-input">
          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            value={email }
            onChange={onEmailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder="Email Ex. sandeep@thinkwink.com"
          />
          {invalidEmail && (
            <p className="error">Enter your email address</p>
          )}
        </div>
        <div className="login-input">
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
            <p className="error">Enter your password</p>
          )}
        </div>

        <div className="login-action">
          <button type="submit" onClick={logoutHandler} disabled={!formIsValid}>
            Login
          </button>
        </div>
      </form>
      <footer>
        <p> 
          New Customer ?<NavLink to="/signup"> Start Hear </NavLink>
          
        </p>
    
      </footer>
    </div>
  );
};

export default Login;
