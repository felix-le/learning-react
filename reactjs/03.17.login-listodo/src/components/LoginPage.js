import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage(props) {
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const patternEmail = /^[a-z][a-z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;


  const handleChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
    if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
  }

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    if (!patternEmail.test(email)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }

    if (password === '') {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }

    if (!errorEmail && !errorPassword) {
      props.history.push('/')
    }
  }

  return (
    <div className="login-page-wrapper">
      <div className="login-page">
        <div className="form">
          <form className="login-form"
            onSubmit={handleSubmitLogin}
            noValidate
          >
            <div className="form-group">
              <input type="email"
                placeholder="Your email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              {errorEmail && <p className="error">Email in't wrong format</p>}
            </div>
            <div className="form-group">
              <input type="password"
                value={password}
                placeholder="Choose password"
                name="password"
                onChange={handleChange}
              />
              {errorPassword && <p className="error">sai toet dit roi</p>}
            </div>
            <button>login</button>
            <div className="form-group box-remember">
              <input type="checkbox" defaultValue="lsRememberMe" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <p className="message">Not registered?
               <Link to="/register-page">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;

