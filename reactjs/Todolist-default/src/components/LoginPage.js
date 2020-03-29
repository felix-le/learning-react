import React, { useState } from 'react';

import { Link } from 'react-router-dom';
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
      * We can validate fields while user imput or after clicking submit button.
      * 
      * */



function LoginPage() {
  const demo = useState([1,2,3,4]);

  console.log(demo)
  return (
    <div className="login-page-wrapper">
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <div className="form-group">
              <input type="email" name="email"
                placeholder="Your email" />
            </div>
            <div className="form-group">
              <input type="password" name="password" id=""/>
            </div>
            <button>Login</button>
            <div className="form-group box-remember">
              <input type="checkbox" name="rememberMe" defaultValue="lsRememberMe" id="rememberMe"/>
              <label htmlFor="rememberMe"></label>
            </div>
            <p className="message">Not registered?
             <Link to ="/RegisterPage">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
};

export default LoginPage;