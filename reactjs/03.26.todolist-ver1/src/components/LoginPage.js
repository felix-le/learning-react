import React, { useState } from "react";

import { Link } from "react-router-dom";
/** 
    1/ mindset
      * create UI
      * create submit event
      * catch value of fields when user input 
      * create an variable to contains input email or password ... 
      
    2/ save value
      * create handle event onChange of fiels email or password ...
      * please console.log to test function or variable after create handle event ....
      * distinguish fields by attributes when user input. E.g: name (event.target.name)
      * save value by useState function  when user input. E.g: value (event.target.value) 
      
    3/ check validate
      * crete an pattern to check format email
      * if correct format email, it will save state email
    
    4/ Successfull login 
      * Redirect homepage page when user submit successfully.
    
    5/ Notice
      * We can validate fields while user imput or after clicking submit button or just after they type
      * 
      * */

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorsEmail, setErrorsEmail] = useState(false);
  const [errorsPassword, setErrorsPassword] = useState(false);
  const patternEmail = /^[a-z][a-z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

  const handleSubmitLogin = event => {
    event.preventDefault();
    // const { name, value } = even.taget
    // console.log('submit successfully')
    if (!patternEmail.test(email)) {
      setErrorsEmail(true);
    } else {
      setErrorsEmail(false);
    }
    if (password === "") {
      setErrorsPassword(true);
    } else {
      setErrorsPassword(false);
    }
    if (errorsEmail === false && errorsPassword === false) {
      props.history.push("/");
    }
  };
  const handleOnChange = event => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      // console.log('email ', email)
    }
    if (name === "password") {
      setPassword(value);
      // console.log('password ', password)
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={handleSubmitLogin} noValidate>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={handleOnChange}
              />
              {errorsEmail && <p className="error">sai email</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id=""
                value={password}
                onChange={handleOnChange}
              />
              {errorsPassword && (
                <p className="error">sai con me may pass roi</p>
              )}
            </div>
            <button>Login</button>
            <div className="form-group box-remember">
              <input
                type="checkbox"
                name="rememberMe"
                defaultValue="lsRememberMe"
                id="rememberMe"
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <p className="message">
              Not registered?
              <Link to="/RegisterPage">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
